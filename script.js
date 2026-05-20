console.log("Hello World");
        let humanScore = 0;
        let computerScore = 0;
function scoreGame() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        if (result === "You win!") {
            (humanScore++);
        } else if (result === "You lose!") {
            (computerScore++);
        }
    }

function getLeader() {
    if (humanScore === computerScore) {
        return (" Tie!")
    } else if (computerScore > humanScore) {
        return ("Computer leads!")
    } else {
        return ("Human leads!")
    }
}
    for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
        console.log("You chose: " + humanChoice);
        console.log("Computer chose: " + computerChoice);
        console.log(playRound(humanChoice, computerChoice));
        console.log("Score: Human " + humanScore + " - Computer " + computerScore);
        console.log(getLeader());
    }


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
