console.log("Hello World");

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:");
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound( humanChoice, computerChoice) {
    if (computerChoice === "rock") {
    if (humanChoice === "rock") {
        return "It's a tie!";
    } else if (humanChoice === "paper") {
        return "You win!";
    } else if (humanChoice === "scissors") {    
        return "You lose!";
    }
}
    if (computerChoice === "paper") {
    if (humanChoice === "rock") {
        return "You lose!";
    } else if (humanChoice === "paper") {
        return "It's a tie!";
    } else if (humanChoice === "scissors") {
        return "You win!";
    }
}
    if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            return "You win!";
        } else if (humanChoice === "paper") {
            return "You lose!";
        } else if (humanChoice === "scissors") {
            return "It's a tie!";
        }
    }
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log ( "You chose: " + humanChoice);
console.log ( "Computer chose: " + computerChoice);
console.log (playRound(humanChoice, computerChoice));

function scoregame() {
    let decider = (playRound(humanChoice, computerChoice));
    if (decider === "You win!") {
        humanScore++;
    } else if (decider === "You lose!") {
        computerScore++;
    }
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
}
function getLeader() {
    if (humanScore > computerScore) {
        return ("Human leads!")
    } else if (computerScore > humanScore) {
        return ("Computer leads!")
    } else {
        return ("It's a tie!")
    }
}
scoregame();
console.log(getLeader());

