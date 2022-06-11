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

function playRound(playerSelection, computerSelection) {  
    if (playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "scissors" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "rock") {
          divResults.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
          playerScore += 1;
          
    } else if (
        playerSelection === "rock" && computerSelection === "paper" || 
        playerSelection ==="scissors" && computerSelection === "rock" || 
        playerSelection === "paper" && computerSelection ==="scissors") {
          divResults.textContent= `You lose! ${computerSelection} beats ${playerSelection}`;
          cpuScore += 1;
    } else  {
        divResults.textContent = `You tie. You picked ${playerSelection} and the computer picked ${computerSelection}`;
        
    }
}

let playerScore = 0
let cpuScore = 0

const container = document.querySelector('#container');
const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');
container.appendChild(btnPaper);
container.appendChild(btnRock);
container.appendChild(btnScissors);

const divResults = document.createElement('div');
container.appendChild(divResults);

const divScore = document.createElement('div')
container.appendChild(divScore);

const playerScoreDiv = document.createElement('div');
const cpuScoreDiv = document.createElement('div');

divScore.appendChild(playerScoreDiv);
divScore.appendChild(cpuScoreDiv);

const h2Player = document.createElement('h2');
const playerScoreResult = document.createElement('div');
h2Player.textContent = "Player Score";
playerScoreDiv.appendChild(h2Player);
playerScoreDiv.appendChild(playerScoreResult);

const h2Cpu = document.createElement('h2');
const cpuScoreResult = document.createElement('div');
h2Cpu.textContent = "CPU Score";
cpuScoreDiv.appendChild(h2Cpu);
cpuScoreDiv.appendChild(cpuScoreResult);

const finalScore = document.createElement('div');
container.appendChild(finalScore);


cpuScoreResult.textContent = cpuScore;
playerScoreResult.textContent = playerScore

let buttons = document.querySelectorAll('button');

btnPaper.textContent = 'paper';
btnRock.textContent = 'rock';
btnScissors.textContent = 'scissors';

buttons.forEach((button) =>{
    button.addEventListener("click", () => {
        let playerSelection = button.textContent
        playRound(playerSelection, computerPlay());

        cpuScoreResult.textContent = cpuScore;
        playerScoreResult.textContent = playerScore;

        if (playerScore === 5){
            finalScore.textContent="You won!"
            playerScore = 0
            cpuScore = 0
        } else if (cpuScore === 5){
            finalScore.textContent="The CPU won!"
            playerScore = 0
            cpuScore = 0
        } else {
            finalScore.textContent = '';
        }




    });
});









