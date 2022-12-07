const fs = require('fs');

// Horrible way to do it, new to js

// A = Rock 
// B = Paper
// C = Scissors

// X = Rock
// Y = Paper
// Z = Scissors


const winningCombos = {
    'A' : 'Z',
    'B' : 'Z',
    'C' : 'Z'
} 

const drawingCombos = {
    'A' : 'Y',
    'B' : 'Y',
    'C' : 'Y'
}

const losingCombos = {
    'A' : 'X',
    'B' : 'X',
    'C' : 'X'
}

const choicePoints = {
    'X' : 1,
    'Y' : 2,
    'Z' : 3
}

const gamePoints = {
    'X' : 0,
    'Y' : 3,
    'Z' : 6
}
const win = {
    'A' : 'Y',
    'B' : 'Z',
    'C' : 'X'
} 

const draw = {
    'A' : 'X',
    'B' : 'Y',
    'C' : 'Z'
}

const lose = {
    'A' : 'Z',
    'B' : 'X',
    'C' : 'Y'
}

fs.readFile('input.txt', 'utf8', (err, data) => {
    const fileContents = data;
    let allRounds = fileContents.split('\r\n');
    console.log(allRounds);
    let sum = 0
    for(var i = 0; i < allRounds.length; i++) {
        console.log(allRounds[i]);
        sum += gamePoints[allRounds[i][2]];
        if(winningCombos[allRounds[i][0]] === allRounds[i][2]){
            sum += choicePoints[win[allRounds[i][0]]]

        }
        if(drawingCombos[allRounds[i][0]] === allRounds[i][2]){
            sum += choicePoints[draw[allRounds[i][0]]]

        }
        if(losingCombos[allRounds[i][0]] === allRounds[i][2]){
            sum += choicePoints[lose[allRounds[i][0]]]

        }

    }
    console.log(sum);
});