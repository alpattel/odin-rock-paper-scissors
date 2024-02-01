let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getPlayerChoice() {
  const playerSelection = prompt("Choose rock, paper, or scissors:");
  return playerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let result = "";

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    result = "You win! Rock beats scissors.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    result = "You lose! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    result = "You win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    result = "You lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    result = "You win! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    result = "You lose! Rock beats scissors.";
  } else {
    result = "Invalid input. Please enter rock, paper, or scissors.";
  }

  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
    console.log(`Round ${i + 1}: ${result}`);
    console.log(`Player: ${playerScore} Computer: ${computerScore}`);
  }
}

game();
