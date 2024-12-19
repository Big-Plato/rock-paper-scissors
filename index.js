let humanScore = 0;
let computerScore = 0;

let btnRock = document.querySelector(".rock");
let btnPaper = document.querySelector(".paper");
let btnScissors = document.querySelector(".scissors");

let rockPaperScissors = [btnRock, btnPaper, btnScissors];
let rpsString = ["Rock", "Paper", "Scissors"];

let humanScoreResult = document.querySelector("#humanScore");
let computerScoreResult = document.querySelector("#computerScore");

let container = document.querySelector(".container");
let msg = document.querySelector("#message");

game = () => {
  // The buttons, when selected, will get the string based on the id of the button in HTML
  rockPaperScissors.forEach((hand) => {
    hand.addEventListener("click", (e) => {
      let playerSelection = e.target.id;

      if (playerSelection === "Rock") {
        console.log("Rock");
      } else if (playerSelection === "Paper") {
        console.log("Paper");
      } else if (playerSelection === "Scissors") {
        console.log("Scissors");
      }

      // The computer will choose by and array declared above
      const getComputerChoice =
        rpsString[Math.floor(Math.random() * rpsString.length)];
      console.log(getComputerChoice);

      const playRound = function (playerSelection, getComputerChoice) {
        //This will decide who wons based on the choices made by the human and the computer

        switch (true) {
          case playerSelection === "Rock" && getComputerChoice === "Paper":
            msg.textContent = "Computer Wins.";
            computerScore++;
            break;

          case playerSelection === "Rock" && getComputerChoice === "Scissors":
            msg.textContent = "Human Wins.";
            humanScore++;
            break;

          case playerSelection === "Scissors" && getComputerChoice === "Paper":
            msg.textContent = "Human Wins.";
            humanScore++;
            break;

          case playerSelection === "Scissors" && getComputerChoice === "Rock":
            msg.textContent = "Computer Wins.";
            computerScore++;
            break;

          case playerSelection === "Paper" && getComputerChoice === "Rock":
            msg.textContent = "Human Wins.";
            humanScore++;
            break;

          case playerSelection === "Paper" && getComputerChoice === "Scissors":
            msg.textContent = "Computer Wins.";
            computerScore++;
            break;

          default:
            msg.textContent = "Draw. Play Again";
        }

        // let selection = document.createElement("p");
        // container.appendChild(selection);
        // selection.setAttribute("style", "color: white; font-size: 1.5rem;");
        // selection.textContent = `Human Choice was: ${playerSelection} - Computer Choice was: ${getComputerChoice}`;

        humanScoreResult.textContent = `Human Score is: ${humanScore}.`;
        computerScoreResult.textContent = `Computer Score is: ${computerScore}.`;
        console.log("Human Score is: " + humanScore);
        console.log("Computer Score is: " + computerScore);

        let finalResult = document.createElement("button");
        finalResult.classList.add(".btn");

        function reloadPage() {
          window.location.reload();
        }

        //Verify the score and end game

        switch (true) {
          case humanScore === 5:
            msg.textContent = "The game is over. You win!";
            container.appendChild(finalResult);
            finalResult.textContent = "Reload game?";
            finalResult.addEventListener("click", reloadPage);
            break;
          case computerScore === 5:
            msg.textContent = "The game is over. You lose :(";
            container.appendChild(finalResult);
            finalResult.textContent = "Reload game?";
            finalResult.addEventListener("click", reloadPage);
            break;
        }
      };

      
      // Call function to play the game
      playRound(playerSelection, getComputerChoice);
    });
  });
};

game();
