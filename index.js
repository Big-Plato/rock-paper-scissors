
let humanScore = 0;
let computerScore = 0;



function getComputerChoice () {
    //Will randomly return one of the string values ("rock", "paper" and "scissors")
    let randomGuess = Math.floor(Math.random() * 3) + 1;

    //if random number is one of the numbers below turn the value of variable to the name of the move
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

    //This will decide who wons based on the three choices made by the human and the computer

    switch (true) {
        case (getHumanChoice === "Rock" && getComputerChoice === "Paper"): 
        console.log("Computer Wins.")
        computerScore++;
        break;

        case (getHumanChoice === "Rock" && getComputerChoice === "Scissors"):
        console.log("Human Wins.") 
        humanScore++;
        break;

        case (getHumanChoice === "Rock" && getComputerChoice === "Rock"):
        console.log("Draw. Play again!");
        break;

        case (getHumanChoice === "Scissors" && getComputerChoice === "Paper"):
        console.log("Human Wins.")
        humanScore++;
        
        case (getHumanChoice === "Scissors" && getComputerChoice === "Rock"):
        console.log("Computer Wins.")
        computerScore++;
        break;

        case (getHumanChoice === "Scissors" && getComputerChoice === "Scissors"):
        console.log("Draw. Play again!");
        break;
        
        case (getHumanChoice === "Paper" && getComputerChoice === "Rock"): 
        console.log("Human Wins.");
        humanScore++;
        break;

        case (getHumanChoice === "Paper" && getComputerChoice === "Scissors"): 
        console.log("Computer Wins.");
        computerScore++;
        break;

        case (getHumanChoice === "Paper" && getComputerChoice === "Paper"): 
        console.log("Draw. Play again!");
        break;
    }

    console.log("Human Score is: " + humanScore);
    console.log("Computer Score is: " + computerScore);

}


// Iterating over five times through the acquaintance of the results of computer and asking for user's input
function playFiveRounds () {
    for (let i = 0; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("End of the game!");
    console.log("Human final score is: " + humanScore);
    console.log("Computer final score is: " + computerScore);

    if (humanScore > computerScore) {
        console.log("Okay, so you don't lose to a machine after all!");
    } else if (humanScore < computerScore) {
        console.log("Sheesh, you lose to Plato");
    } else {
        console.log("We have a draw, But there is no place for a draw here. Let's flipcoin");
        let flipCoin = Math.floor(Math.random() * 2);

        if (flipCoin === 1) {
            console.log("Computer Wins");
        } else {
            console.log("Human Wins!");
        }

    }
}

playFiveRounds();
