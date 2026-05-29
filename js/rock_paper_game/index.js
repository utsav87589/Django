const choices = ['rock', 'paper', 'scissors'];

const playerDisplay = document.getElementById('playerDisplay'); 
const computerDisplay = document.getElementById('computerDisplay'); 
const resultDisplay = document.getElementById('resultDisplay');

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

    result.classList.remove('greentext', 'redtext');

    switch(result){
        case 'You win' : 
        resultDisplay.classList.add('greentext');
        break;

        case 'You loose' : 
        resultDisplay.classList.add('redtext');
        break
    }
}