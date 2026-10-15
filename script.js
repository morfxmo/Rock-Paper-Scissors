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

function getHumanChoice (round) {
    let humanChoice = window.prompt(`Round ${round}: \nEnter Your Choice`);
    humanChoice.toLowerCase();
    return humanChoice;
}

function playGame () {
    console.log("in play!");
    let humanScore = 0 , computerScore = 0;
    function scoreInfo () {
        let scoreInfoReturn = `\nScore : \nYou : ${humanScore} | Computer : ${computerScore}`;
        return scoreInfoReturn;
    }

    function playRound (humanChoice , computerChoice) {
        // Human win conditions
        let humanWins = `You did it! , Computer chose ${computerChoice}`;
        if (humanChoice == "rock" && computerChoice == "scissors")
            humanScore++ , alert(humanWins + scoreInfo());
        else if (humanChoice == "paper" && computerChoice == "rock")
            humanScore++ , alert(humanWins + scoreInfo());
        else if (humanChoice == "scissors" && computerChoice == "paper")
            humanScore++ , alert(humanWins + scoreInfo());
        else if (humanChoice == computerChoice)
            alert("Draw!" + scoreInfo())
        else 
            computerScore++ , alert(`Computer chose ${computerChoice} , You lose!` + scoreInfo()); // otherwise computer wins
    }

    let roundNum = 1;
    while (humanScore < 5 && computerScore < 5)
        playRound(getHumanChoice(roundNum++) , getComputerChoice());
    
    alert(`Final score : \nYou : ${humanScore} | Computer : ${computerScore}`);
}

playGame();
