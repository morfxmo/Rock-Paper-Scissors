function getComputerChoice () {
    let computerChoice;
    let rand = Math.floor(Math.random() * 3);

    if (rand == 0)
        computerChoice = "rock";
    else if (rand == 1)
        computerChoice = "paper";
    else 
        computerChoice = "scissors"

    return computerChoice;
}

const roundCounter = document.querySelector(".counter");
const humanScoreBoard = document.querySelector(".human-score-val");
const computerScoreBoard = document.querySelector(".computer-score-val");
const choices = document.querySelector(".choices");
const log = document.querySelector(".log");
let roundNum = 1;

function getHumanChoice () {
    let humanChoice = "bleh";

    choices.addEventListener("click" , (event) => {
        let clickedBtn = event.target.id;
        console.log(clickedBtn);

        if (clickedBtn === "rock-btn") humanChoice = "rock";
        if (clickedBtn === "paper-btn") humanChoice = "paper";
        if (clickedBtn === "scissors-btn") humanChoice = "scissors";
    })

    log.textContent = "Waiting for your choice...";
    
    return humanChoice;
}

function playGame () {
    console.log("in play!");
    let humanScore = 0 , computerScore = 0;

    function playRound (humanChoice , computerChoice) {
        // Human win conditions
        let humanWins = `You did it! , Computer chose ${computerChoice}`;
        let innerLog = "";
        if (humanChoice == "rock" && computerChoice == "scissors")
            humanScore++ , innerLog = humanWins;
        else if (humanChoice == "paper" && computerChoice == "rock")
            humanScore++ , innerLog = humanWins;
        else if (humanChoice == "scissors" && computerChoice == "paper")
            humanScore++ , innerLog = humanWins;
        else if (humanChoice == computerChoice)
            innerLog = "Draw!";
        else 
            computerScore++ , innerLog = `Computer chose ${computerChoice} , You lose!`; // otherwise computer wins

        humanScoreBoard.textContent = humanScore;
        computerScoreBoard.textContent = computerScore;
        log.textContent = innerLog;
        roundCounter.textContent = ++roundNum;
    }

    while (humanScore < 5 && computerScore < 5)
        playRound(getHumanChoice() , getComputerChoice());

    if (humanScore == 5) log.textContent = "Congrats!!!, you did it!";
    else log.textContent = "You lost to machine, bruh";
}

playGame();
