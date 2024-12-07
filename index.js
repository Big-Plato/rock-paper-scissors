
let humanScore = 0;
let computerScore = 0;

console.log("Hello, World!");

function getComputerChoice (string) {
    //Will randomly return one of the string values ("rock", "paper" and "scissors")
    let randomGuess = Math.floor(Math.random() * 3) + 1;
    console.log(randomGuess);
    return randomGuess;
    if (randomGuess === 1) {
        console.log("Rock");
    } else if (randomGuess === 2) {
        console.log("Paper");
    } else if (randomGuess === 3) {
        console.log("Scissors");
    }
}

function getHumanChoice () {
    let humanChoice = prompt("What is your choice [Rock, Paper or Scissors]? ");

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

    if (getHumanChoice === "Rock" && getComputerChoice === "Paper") {
        console.log("Computer Wins.")
    } else if (getHumanChoice === "Rock" && getComputerChoice === "Scissors") {
        console.log("Human Wins.") 
    } else if (getHumanChoice === "Rock" && getComputerChoice === "Rock") {
        console.log("Draw. Play again!")
    } else if (getHumanChoice === "Scissors" && getComputerChoice === "Paper") {
        console.log("Human Wins.")
    } else if (getHumanChoice === "Scissors" && getComputerChoice === "Rock") {
        console.log("Computer Wins.")
    } else if (getHumanChoice === "Scissors" && getComputerChoice === "Scissors") {
        console.log("Draw. Play again!")
    } else if (getHumanChoice === "Paper" && getComputerChoice === "Rock") {
        console.log("Human Wins.")
    } else if (getHumanChoice === "Paper" && getComputerChoice === "Scissors") {
        console.log("Computer Wins.")
    } else {
        console.log("Draw. Play again!")
    }


}

playRound();

