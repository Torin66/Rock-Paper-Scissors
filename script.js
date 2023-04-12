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

// console.log(getComputerChoice());
// let playerSelection = prompt('Choose between Rock, Paper, Scissors');
// playerSelection = playerSelection.toLowerCase()
// alert(`You choosed ${playerSelection} `);

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
   
const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
