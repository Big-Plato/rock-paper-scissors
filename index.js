
let humanScore = 0;
let computerScore = 0;



function getComputerChoice () {
    //Will randomly return one of the string values ("rock", "paper" and "scissors")
    let randomGuess = Math.floor(Math.random() * 3) + 1;

    //if random number is one of the numbers below turn the value of variable to the name of the move
    console.log(randomGuess);
    if (randomGuess === 1) {
        console.log("Rock");
        randomGuess = "Rock";
    } else if (randomGuess === 2) {
        console.log("Paper")
        randomGuess = "Paper";
    } else {
        console.log("Scissors");
        randomGuess = "Scissors";
    }

    //return that name
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
        return "Human: " + "Scissors";
    } 
    return "Human's choice was: " + humanChoice;

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


// Iterating over five times through the acquaintance of the results of computer and asking for user's input
for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}


