// Get computer input
// return rock or paper or scissor function
// print to console to test
// new function w/ 2 parameters, player selection and computer selection.
// player selection parameter needs to be case insensitive. 
// rock > scissors > paper > rock;
// return a string that declares winner.

const body = document.querySelector('body');
const results = document.createElement('div');
const rounds = document.createElement('div');
const score = document.createElement('div');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
body.appendChild(results);
body.appendChild(rounds);
body.appendChild(score);

let round = 0;
let computerCount = 0;
let playerCount = 0;

function getComputerChoice () {
    const choices = ["rock" , "paper" , "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    let compchoice = choices[random];
    return compchoice;
}

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case (playerSelection === computerSelection):
      results.textContent = "You tied.";
      break;
    case (playerSelection === "rock" && computerSelection === "scissors"):
    case (playerSelection === "scissors" && computerSelection === "paper"):
    case (playerSelection === "paper" && computerSelection === "rock"):
      results.textContent = "You win!";
      playerCount += 1;
      break;
    case (playerSelection === "rock" && computerSelection === "paper"):
    case (playerSelection === "scissors" && computerSelection === "rock"):
    case (playerSelection === "paper" && computerSelection === "scissors"):
      results.textContent = "You lose...";
      computerCount += 1;
      break;
    default:
      results.textContent = "ERROR";
  }
  score.textContent = `Your Score: ${playerCount} ︱ Computer Score: ${computerCount}`;
  body.appendChild(results);
  body.appendChild(rounds);
  body.appendChild(score);
  return [playerCount, computerCount];
}

function countRounds() {
  round += 1;
  rounds.innerText = `Round: ${round}`;
  return round;
}

  let playerSelection;
  
  btn1.addEventListener('click', () => {
    playerSelection = "rock";
    playRound(playerSelection, getComputerChoice());
    countRounds();
  });
  btn2.addEventListener('click', () => {
    playerSelection = "paper";
    playRound(playerSelection, getComputerChoice());
    countRounds();
  });
  btn3.addEventListener('click', () => {
    playerSelection = "scissors";
    playRound(playerSelection, getComputerChoice());
    countRounds();
  });





// btn2.addEventListener('click', () => playRound("paper"));
// btn3.addEventListener('click', () => playRound("scissors"));