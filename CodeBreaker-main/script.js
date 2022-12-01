//Alan Yuan Period 7-8 even 11/22/22 CodeBreaker
var playerGuessNum = "";
var correctGuess = "";
var guessesLeft = 7;
const higher = " -  code is higher";
const lower = " - code is lower";
const correct = " - Correct!"
const gameOver = " - Game Over! The correct code was "
function initialize() {
    playerGuessDisplay = document.getElementById("playerGuess");
    playerLog = document.getElementById("log");
    playerGuessesLeftDisplay = document.getElementById("clock");

    generateNumber();
}

function generateNumber() {
    let digit1 = Math.floor((Math.random() * 3) + 1);
    digit1 = digit1.toString();
    let digit2 = Math.floor((Math.random() * 3) + 1);
    digit2 = digit2.toString();
    let digit3 = Math.floor((Math.random() * 3) + 1);
    digit3 = digit3.toString();

    correctGuess = digit1 + digit2 + digit3;
}

function guessOne() {
    playerGuessNum += "1";
    display();
}
function guessTwo() {
    playerGuessNum += "2";
    display();
}
function guessThree() {
    playerGuessNum += "3";
    display();
}
function testGuess() {
    guessesLeft--;
    if (playerGuessNum === correctGuess) {
        playerLog.innerHTML += playerGuessNum + correct;
        guessesLeft = 7;
        generateNumber();
    } else if (parseInt(playerGuessNum) > parseInt(correctGuess)) {
        if (guessesLeft < 1) {
            playerLog.innerHTML += playerGuessNum + gameOver + correctGuess;
            guessesLeft = 7;
            generateNumber();
        } else {
            playerLog.innerHTML += playerGuessNum + lower;
        }
    } else {
        if (guessesLeft < 1) {
            playerLog.innerHTML += playerGuessNum + gameOver + correctGuess;
            guessesLeft = 7;
            generateNumber();
        } else {
            playerLog.innerHTML += playerGuessNum + higher;
        }
    }
    playerGuessesLeftDisplay.innerHTML = "Guesses Left: " + guessesLeft;
    playerLog.innerHTML += "<br>";
}
function display() {
    playerGuessDisplay.innerHTML = playerGuessNum;
    if (playerGuessNum.length < 3) {
        for (let i = playerGuessNum.length; i < 3; i++) {
            playerGuessDisplay.innerHTML += "-";
        }
    } else {
        testGuess();
        playerGuessNum = "";
        display();
    }
}

function clearAll() {
    playerGuessNum = "";
    display();
}
