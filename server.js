import express from 'express';
var app = express();
// Require minimist module (make sure you install this one via npm).
import minimist from 'minimist';
import {rps} from './lib/rpsls.js';
import {rpsls} from './lib/rpsls.js';
// Use minimist to process one argument `--port=` on the command line after `node server.js`.
const args = minimist(process.argv.slice(2));
const port = args.port || 5000
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// READ (HTTP method GET) at root endpoint /app/
app.get('/app/', (req, res, next) => {
    res.status(200).setHeader('Content-Type', 'text/plain').send('200 OK');
});

app.get('/app/rps/', (req, res) => {
    res.status(200)
    .setHeader('Content-Type', 'application/json')
    .send('{"player":"(rock|paper|scissors)"}');
});

app.get('/app/rpsls/', (req, res) => {
    res.status(200)
    .setHeader('Content-Type', 'application/json')
    .send(JSON.stringify(rpsls()));
});

app.get('/app/rps/play', (req, res) => {
    const shot = req.query.shot;
    res.status(200)
    .setHeader('Content-Type', 'application/json')
    .send(JSON.stringify(rps(shot)));
});
  
app.post('/app/rps/play', express.json(), (req, res) => {
    const shot = req.body.shot;
    res.status(200)
    .setHeader('Content-Type', 'application/json')
    .send(JSON.stringify(rps(shot)));
});

app.use(function(req, res){
	res.json({"message":"Endpoint not found. (404)"});
    res.status(404);
});