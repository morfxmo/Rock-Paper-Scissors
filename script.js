const roundCounter = document.querySelector(".counter");
const humanScoreBoard = document.querySelector(".human-score-val");
const computerScoreBoard = document.querySelector(".computer-score-val");
const choices = document.querySelector(".choices");
const log = document.querySelector(".log");

let humanScore = 0 , computerScore = 0 , roundNum = 1;

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

function handler (event) {
    let humanChoice = "bleh";
    let clickedBtn = event.target.id;
    console.log(clickedBtn);

    if (clickedBtn === "rock-btn") humanChoice = "rock";
    if (clickedBtn === "paper-btn") humanChoice = "paper";
    if (clickedBtn === "scissors-btn") humanChoice = "scissors";

    playRound(humanChoice , getComputerChoice());
}
choices.addEventListener("click" , handler)

function playRound (humanChoice , computerChoice) {

    let innerImg;
    if (computerChoice == "rock") 
        innerImg = `<img src="resources/rock.webp" style="width: 25px; height: auto; padding: 5px;">`;
    else if (computerChoice == "paper")
        innerImg = `<img src="resources/paper.webp" style="width: 25px; height: auto; padding: 5px;">`;
    else 
        innerImg = `<img src="resources/scissors.webp" style="width: 25px; height: auto; padding: 5px;">`;

    // Human win conditions
    let humanWins = `You did it! , Computer chose ${innerImg}`;
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
        computerScore++ , innerLog = `Computer chose ${innerImg} , You lose!`; // otherwise computer wins

    humanScoreBoard.textContent = humanScore;
    computerScoreBoard.textContent = computerScore;
    log.innerHTML = innerLog;
    roundCounter.textContent = ++roundNum;

    if (humanScore == 5) log.textContent = "Congrats!!!, you did it!" , choices.removeEventListener("click" , handler);
    else if (computerScore == 5) log.textContent = "You lost to machine, bruh" , choices.removeEventListener("click" , handler);
}
