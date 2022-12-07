const fs = require('fs');


// A = Rock 
// B = Paper
// C = Scissors

// X = Rock
// Y = Paper
// Z = Scissors


const winningCombos = {
    'A' : 'Y',
    'B' : 'Z',
    'C' : 'X'
} 

const drawingCombos = {
    'A' : 'X',
    'B' : 'Y',
    'C' : 'Z'
}

const losingCombos = {
    'A' : 'Z',
    'B' : 'X',
    'C' : 'Y'
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


fs.readFile('input.txt', 'utf8', (err, data) => {
    const fileContents = data;
    let allRounds = fileContents.split('\r\n');
    console.log(allRounds);
    let sum = 0
    for(var i = 0; i < allRounds.length; i++) {
        console.log(allRounds[i]);
        sum += choicePoints[allRounds[i][2]];
        if(winningCombos[allRounds[i][0]] === allRounds[i][2]){
            sum += 6
        }
        if(drawingCombos[allRounds[i][0]] === allRounds[i][2]){
            sum += 3
        }
        if(losingCombos[allRounds[i][0]] === allRounds[i][2]){
        }
    }
    console.log(sum);
});