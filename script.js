function getComputerChoice () {
    let computerChoice;
    let rand = Math.random();

    // This is a bit off but anything works for now 
    if (rand <= 0.333)
        computerChoice = "rock";
    else if (rand <= 0.666)
        computerChoice = "paper";
    else 
        computerChoice = "sissors"

    return computerChoice;
}

function getHumanChoice () {
    let humanChoice = window.prompt("Enter Your Choice :");
    humanChoice.toLowerCase();
    return humanChoice;
}

let humanScore = 0 , computerScore = 0;
function playRound (humanChoice , computerChoice) {
    console.log(`Computer Choice : ${computerChoice}`);
    console.log(`Human Choice : ${humanChoice}`);

    // Human win conditions
    if (humanChoice == "rock" && computerChoice == "sissors")
        humanScore++ , alert("You did it!");
    else if (humanChoice == "paper" && computerChoice == "rock")
        humanScore++ , alert("You did it!");
    else if (humanChoice == "sissors" && computerChoice == "paper")
        humanScore++ , alert("You did it!");
    else if (humanChoice == computerChoice)
        alert("Draw!")
    else 
        computerScore++ , alert("Computer is smart >_<"); // otherwise computer wins
}

playRound(getHumanChoice() , getComputerChoice());
console.log(`Test Round : H ${humanScore} | C ${computerScore}`)
