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
    res.status(200)
    .setHeader('Content-Type', 'text/plain')
    .send('200 OK');
});

// RPS
app.get('/app/rps/', (req, res) => {
    var result = JSON.stringify(rps())
    res.status(200)
    .setHeader('Content-Type', 'application/json')
    .send(result);
});
// URLEncoded data body rps:
app.get('/app/rps/play', (req, res) => {
    const shot = req.query.shot;
    try{
        var result = JSON.stringify(rps(shot));
    }
    catch {
        result = `${shot} is out of range.`
    }
    res.status(200)
    .setHeader('Content-Type', 'application/json')
    .send(result);
});
// JSON data body rps:
app.post('/app/rps/play', express.json(), (req, res) => {
    const shot = req.body.shot;
    try{
        var result = JSON.stringify(rps(shot));
    }
    catch {
        result = `${shot} is out of range.`
    }
    res.status(200)
    .setHeader('Content-Type', 'application/json')
    .send(result);
});
// Parameter endpoint rps:
app.get('/app/rps/play/:shot', (req, res) => {
    const shot = req.params.shot;
    try{
        var result = JSON.stringify(rps(shot));
    }
    catch {
        result = `${shot} is out of range.`
    }
    res.status(200)
    .setHeader('Content-Type', 'application/json')
    .send(result);
});

// RPSLS
app.get('/app/rpsls/', (req, res) => {
    var result = JSON.stringify(rpsls())
    res.status(200)
    .setHeader('Content-Type', 'application/json')
    .send(result);
});
// URLEncoded data body rpsls:
app.get('/app/rpsls/play', (req, res) => {
    const shot = req.query.shot;
    try{
        var result = JSON.stringify(rpsls(shot));
    }
    catch {
        result = `${shot} is out of range.`
    }
    res.status(200)
    .setHeader('Content-Type', 'application/json')
    .send(result);
});
// JSON data body rpsls:
app.post('/app/rpsls/play', express.json(), (req, res) => {
    const shot = req.body.shot;
    try{
        var result = JSON.stringify(rpsls(shot));
    }
    catch {
        result = `${shot} is out of range.`
    }
    res.status(200)
    .setHeader('Content-Type', 'application/json')
    .send(result);
});
// Parameter endpoint rpsls:
app.get('/app/rpsls/play/:shot', (req, res) => {
    const shot = req.params.shot;
    try{
        var result = JSON.stringify(rpsls(shot));
    }
    catch {
        result = `${shot} is out of range.`
    }
    res.status(200)
    .setHeader('Content-Type', 'application/json')
    .send(result);
});

// Nonexistent endpoint
app.use(function(req, res){
    res.status(404)
    .setHeader('Content-Type', 'text/plain')
    .send('404 NOT FOUND');
});