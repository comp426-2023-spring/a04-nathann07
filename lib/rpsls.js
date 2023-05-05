

export function rps(shot) {
    if (shot === undefined) {
        return {player:'rock'};
    }
    else if(shot.toLowerCase() == "rock") {
        return {player:'rock',opponent:'rock',result:'tie'}
    }
    else if(shot.toLowerCase() == "paper") {
        return {player:'paper',opponent:'rock',result:'win'}
    }
    else if(shot.toLowerCase() == "scissors") {
        return {player:'scissors',opponent:'rock',result:'lose'}
    }
    else {
        console.error(shot + ' is out of range.');
        throw new Error;
    }
}

export function rpsls(shot) {
    if (shot === undefined) {
        return {player:'Spock'};
    }
    else if(shot.toLowerCase() == "rock") {
        return {player:'rock',opponent:'rock',result:'tie'}
    }
    else if(shot.toLowerCase() == "paper") {
        return {player:'paper',opponent:'rock',result:'win'}
    }
    else if(shot.toLowerCase() == "scissors") {
        return {player:'scissors',opponent:'rock',result:'lose'}
    }
    else if(shot.toLowerCase() == "lizard") {
        return {player:'lizard',opponent:'rock',result:'lose'}
    }
    else if(shot.toLowerCase() == "spock") {
        return {player:'spock',opponent:'rock',result:'win'}
    }
    else {
        console.error(shot + ' is out of range.');
        throw new Error;
    }
}