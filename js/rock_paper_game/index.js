const choices = ['rock', 'paper', 'scissors'];

const playerDisplay = document.getElementById('playerDisplay'); 
const computerDisplay = document.getElementById('computerDisplay'); 
const resultDisplay = document.getElementById('resultDisplay');

let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if(playerChoice === computerChoice){
        result = "It's a tie!";
    }

    else{
        switch(playerChoice){
            case "rock" : 
                result = (computerChoice === 'paper') ? 'You loose' : "You win";
                break;
            case "paper" : 
                result = (computerChoice === 'scissors') ? 'You loose' : "You win";
                break;
            case "scissors" : 
                result = (computerChoice === 'rock') ? 'You loose' : "You win";
                break;
        }
    }

    playerDisplay.textContent = `Player : ${playerChoice}`;
    computerDisplay.textContent = `Computer : ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greentext', 'redtext');

    switch(result){
        case 'You win' : 
            resultDisplay.classList.add('greentext');
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

        case 'You loose' : 
            resultDisplay.classList.add('redtext');
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}