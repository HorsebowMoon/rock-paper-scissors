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
    let result = ""
    playerSelection = prompt("Rock, paper, scissors: ");
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return result = "Victory";
    } else if (playerSelection === "rocks" && computerSelection === "paper" || playerSelection ==="scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection ==="scissors") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return result = "Failure";
    } else  {
        console.log(`You tie. You picked ${playerSelection} and the computer picked ${computerSelection}`);
        return result = "Tied";
    }
}

function game() {
    let playerWin = 0
    let computerWin = 0
    for (let i = 0; i < 5; i++) {
        let result = gamePlay()
        console.log(result);
        if (result === "Victory") {
            playerWin += 1;
        } else if ( result === "Failure") {
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