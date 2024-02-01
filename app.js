function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
  document.querySelector(".computer-choice").textContent = computerSelection;
  return computerSelection;
}

function getPlayerChoice() {
  const playerSelection = prompt(
    "Enter your choice (rock, paper, or scissors):"
  );
  document.querySelector(".player-choice").textContent = playerSelection;
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  getPlayerChoice();
  document.querySelector(".player-choice").textContent = playerSelection;
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return "You win! Rock beats scissors.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      return "You lose! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return "You win! Paper beats rock.";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      computerScore++;
      return "You lose! Scissors beats paper.";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore++;
      return "You win! Scissors beats paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      return "You lose! Rock beats scissors.";
    } else {
      return "Invalid input. Please enter rock, paper, or scissors.";
    }
  }
}

if (playerScore > computerScore) {
  document.querySelector(".result").textContent = "You win!";
} else if (playerScore < computerScore) {
  document.querySelector(".result").textContent = "You lose!";
} else {
  document.querySelector(".result").textContent = "It's a tie!";
}
