function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function gamePlay(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = "rock";
    /*playerSelection = prompt("Rock, paper, scissors: ");*/
    /*playerSelection = playerSelection.toLowerCase();*/
    
    if (computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    } else if (computerSelection == "paper") {
        return "You lose! Paper beats rock!";
    } else {
        return "You tie. Both picked rock";
    }
}

console.log(gamePlay());