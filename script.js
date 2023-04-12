function getComputerChoice() {
    let numberRandom = Math.floor(Math.random() * 3);
    if (numberRandom == 0) {
        gameChoice = "rock";
    } else if (numberRandom == 1) {
        gameChoice = "paper"
    } else if (numberRandom == 2){
        gameChoice = "scissors";
    }
    return gameChoice;
}  

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        resultRound = "Draw";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        resultRound = "You lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        resultRound = "You win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        resultRound = "You win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        resultRound = "You lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        resultRound = "You win! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        resultRound = "You lose! Rock beats Scissors";
    }
    return resultRound
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Choose between Rock, Paper, Scissors!');
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        console.log(`Player selection: ${playerSelection}`)
        console.log(`Computer selection: ${computerSelection}`)
        resultR = playRound(playerSelection, computerSelection);    
        if (resultR == "Draw"){
            playerScore += 0;
            computerScore += 0;
        } else if (resultR == "You win! Rock beats Scissors" || resultR == "You win! Paper beats Rock" || resultR == "You win! Scissors beats Paper"){
            playerScore += 1;
        } else {
            computerScore += 1;
        }
        console.log(resultR)
        console.log(`Score: - Player=${playerScore} - Computer=${computerScore}`)
    }
    if (playerScore > computerScore){
        console.log(`You Win! Score: - Player=${playerScore} - Computer=${computerScore}`);
    } else if (playerScore < computerScore){
        console.log(`You Lose! Score: - Player=${playerScore} - Computer=${computerScore}`);
    } else {
        console.log (`Draw! Score: - Player=${playerScore} - Computer=${computerScore}`);
    }
}

// const playerSelection = "paper";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

game();


