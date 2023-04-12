function getComputerChoice() {
    let numberRandom = Math.floor(Math.random() * 3);
    if (numberRandom == 0) {
        gameChoice = "Rock";
    } else if (numberRandom == 1) {
        gameChoice = "Paper"
    } else if (numberRandom == 2){
        gameChoice = "Scissors";
    }
    return gameChoice;
}  


console.log(getComputerChoice());