let btnRock = document.querySelector(".rock");
let btnPaper = document.querySelector(".paper");
let btnScissors = document.querySelector(".scissors");

let rockPaperScissors = [btnRock, btnPaper, btnScissors];
let rpsString = ["Rock", "Paper", "Scissors"];

let humanScoreResult = document.querySelector("#humanScore");
let computerScoreResult = document.querySelector("#computerScore");

let container = document.querySelector(".container");
let msg = document.querySelector("#message");

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  // The buttons, when selected, will get the string based on the id of the button in HTML
  rockPaperScissors.forEach((hand) => {
    hand.addEventListener("click", (e) => {
      let playerSelection = e.target.id;
      console.log(playerSelection)

      if (playerSelection === "Rock") {
        console.log("Rock");
      } else if (playerSelection === "Paper") {
        console.log("Paper");
      } else if (playerSelection === "Scissors") {
        console.log("Scissors");
      }

      // The computer will choose by and array declared above
      const getComputerChoice = () => {
        const computerChoice = rpsString[Math.floor(Math.random() * rpsString.length)];
        console.log(computerChoice);
        return computerChoice;
      }

      const playRound = function (playerSelection, getComputerChoice) {
        let playerWins;
        const computerChoice = getComputerChoice();
        if (playerSelection === computerChoice) {
          playerWins = false;
        } else {
          if (playerSelection === 'Rock' && computerChoice === 'Scissors' || playerSelection === 'Paper' && computerChoice === 'Rock' || playerSelection === 'Scissors' && computerChoice === 'Paper') {
            playerWins =  true;
            playerScore++;
          } else {
            playerWins = false;
            computerScore++;
          }
        }
        
        const whoWins = (playerChoice) => {
          if (playerChoice === false && playerSelection === computerChoice) {
            msg.textContent = `It's a draw. Both players have selected ${computerChoice}. Play again!`
          } else if (!playerChoice) {
            msg.textContent = `Computer Wins! ${computerChoice} wins over ${playerSelection}.`;
          } else {
            msg.textContent = `Human Wins! ${playerSelection} wins over ${computerChoice}.`;
          }
        }

        whoWins(playerWins);
        humanScoreResult.textContent = `Player Score is: ${playerScore}.`;
        computerScoreResult.textContent = `Computer Score is: ${computerScore}.`;
        console.log("Human Score is: " + playerScore);
        console.log("Computer Score is: " + computerScore);
      };


      function gameOver(playerScore, computerScore) {
        if (playerScore > computerScore && playerScore === 5) {
          msg.textContent = "The game is over. You win!";
          return true;
        } else if (computerScore === 5 && computerScore > playerScore) {
          msg.textContent = "The game is over. You lose :(";
          return true;
        }
      }

      if (gameOver(playerScore, computerScore)) {
        computerScore = 0;
        return 1;
      } else {
        playRound(playerSelection, getComputerChoice);
      }
      
      

    });
  });
};

game();

const reload = () => {
  location.reload();
}
