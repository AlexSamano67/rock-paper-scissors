console.log("Hello World");
let humanScore = 0;
let computerScore = 0;
for (let i = 0; i < 10; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    if (result === "You win!") humanScore++;
    if (result === "You lose!") computerScore++;

    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);
    console.log(result);

    console.log("Current score - You: " + humanScore + " Computer: " + computerScore);

}
   

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    if (typeof prompt === "function") {
    const choice = prompt("Enter rock, paper, or scissors:");
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
} 
}
function playRound( humanChoice, computerChoice) {
    if (computerChoice === "rock") {
    if (humanChoice === "rock") {
        return result = "It's a tie!";
    } else if (humanChoice === "paper") {
        return result = "You win!";
    } else if (humanChoice === "scissors") {
        return result = "You lose!";
    }
}
    if (computerChoice === "paper") {
    if (humanChoice === "rock") {
        return result = "You lose!";
    } else if (humanChoice === "paper") {
        return result = "It's a tie!";
    } else if (humanChoice === "scissors") {
        return result = "You win!";
    }
}
    if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            return result = "You win!";
        } else if (humanChoice === "paper") {
            return result = "You lose!";
        } else if (humanChoice === "scissors") {
            return result = "It's a tie!";
        }
    }
    }



function getLeader() {
    if (humanScore % computerScore === 0) {
        return (" Score is tied!")
    } else if (computerScore % humanScore > 0) {
        return ("Computer leads!")
    } else {
        return ("Human leads!")
    }
}