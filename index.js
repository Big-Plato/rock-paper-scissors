
let humanScore = 0;
let computerScore = 0;



function getComputerChoice () {
    //Will randomly return one of the string values ("rock", "paper" and "scissors")
    let randomGuess = Math.floor(Math.random() * 3) + 1;
    console.log(randomGuess);
    if (randomGuess === 1) {
        console.log("I'm random guess: " + randomGuess);
        console.log("Rock");
        randomGuess = "Rock";
    } else if (randomGuess === 2) {
        console.log("I1m random guesser: " + randomGuess);
        console.log("Paper")
        randomGuess = "Paper";
    } else {
        console.log(randomGuess);
        console.log("Scissors");
        randomGuess = "Scissors";
    }


    return randomGuess;
}

function getHumanChoice () {
    
    let humanChoice = prompt("What is your choice [Rock, Paper or Scissors]? ");
    // Making sure that there is no typo
    if (humanChoice === 'Rock' || humanChoice === 'ROCK' || humanChoice === 'rock') {
        console.log("Rock");
        return "Rock";
    } else if (humanChoice === 'Paper' || humanChoice === 'PAPER' || humanChoice === 'paper') {
        console.log("Paper");
        return "Paper";
    } else if (humanChoice === 'Scissors' || humanChoice === 'SCISSORS' || humanChoice === 'scissors') {
        console.log("Scissors");
        return "Scissors";
    } 

}

function playRound (getHumanChoice, getComputerChoice) {

    //This function will decide who wons with the other functions results and increase score by 1 
    //depending of who wins.

    if (getHumanChoice === "Rock" && getComputerChoice === "Paper") {
        console.log("Computer Wins.")
        computerScore++;
    } else if (getHumanChoice === "Rock" && getComputerChoice === "Scissors") {
        console.log("Human Wins.") 
        humanScore++;
    } else if (getHumanChoice === "Rock" && getComputerChoice === "Rock") {
        console.log("Draw. Play again!")
    } else if (getHumanChoice === "Scissors" && getComputerChoice === "Paper") {
        console.log("Human Wins.")
        humanScore++;
    } else if (getHumanChoice === "Scissors" && getComputerChoice === "Rock") {
        console.log("Computer Wins.")
        computerScore++;
    } else if (getHumanChoice === "Scissors" && getComputerChoice === "Scissors") {
        console.log("Draw. Play again!");
    } else if (getHumanChoice === "Paper" && getComputerChoice === "Rock") {
        console.log("Human Wins.");
        humanScore++;
    } else if (getHumanChoice === "Paper" && getComputerChoice === "Scissors") {
        console.log("Computer Wins.");
        computerScore++;
    } else if (getHumanChoice === "Paper" && getComputerChoice === "Paper") {
        console.log("Draw. Play again!");
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

