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
    let result = ""
    /*playerSelection = prompt("Rock, paper, scissors: ");*/
    /*playerSelection = playerSelection.toLowerCase();*/
    
    if (computerSelection === "scissors") {
        return result = "You win! Rock beats scissors";
    } else if (computerSelection == "paper") {
        return result = "You lose! Paper beats rock!";
    } else {
        return result = "You tie. Both picked rock";
    }
}

function game() {
    let playerWin = 0
    let computerWin = 0
    for (let i = 0; i < 5; i++) {
        let result = gamePlay()
        console.log(result);
        if (result === "You win! Rock beats scissors") {
            playerWin += 1;
        } else if ( result === "You lose! Paper beats rock!") {
            computerWin += 1;
        } else {
            console.log("Nobody won this round");
        }
        console.log("You have played " + (i+1) + " round(s)");
        console.log("\n")
    }

    if (playerWin < computerWin) {
        console.log("You lost. The computer won " + computerWin + " times. You only won " + playerWin + " times.");
    } else if (playerWin > computerWin) {
        console.log("You won! You had " + playerWin + " victories. The computer won " + computerWin + " times.");
    } else {
        console.log("You tied against the computer. You won " + playerWin + " matches and the computer won " + computerWin + " matches" )
    };
}

console.log(game());