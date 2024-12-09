
let humanScore = 0;
let computerScore = 0;



function getComputerChoice () {
    // Will randomly return one of the string values ("rock" = 1, "paper" = 2 and "scissors" = 3)
    let randomGuess = Math.floor(Math.random() * 3) + 1;

    // Random number will determine what output will be
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
    
    // Formatting the text after the input, so the user could write the way he wants
    let humanChoice = prompt("What is your choice [Rock, Paper or Scissors]? ");
    let capitalize = humanChoice.slice(0,1).toUpperCase();
    let rest = humanChoice.slice(1, humanChoice.length);
    humanChoice = capitalize + rest.toLowerCase();  

    console.log(humanChoice);
    return humanChoice;
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

    // Returning the actual score
    console.log("Human Score is: " + humanScore);
    console.log("Computer Score is: " + computerScore);

}


// Iterating over five times through the acquaintance of the results of computer and asking for user's input
function playFiveRounds () {
    for (let i = 0; i < 5; i++) {
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
        console.log("We have a draw, But there is no place for a draw here. Let's flipcoin!!");
        let flipCoin = Math.floor(Math.random() * 2);

        if (flipCoin === 1) {
            console.log("Computer Wins");
        } else {
            console.log("Human Wins!");
        }

    }
}

playFiveRounds();
