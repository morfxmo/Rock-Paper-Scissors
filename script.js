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

function getHumanChoice (round) {
    let humanChoice = window.prompt(`Round ${round}: \nEnter Your Choice`);
    humanChoice.toLowerCase();
    return humanChoice;
}

function playGame () {
    let humanScore = 0 , computerScore = 0;
    function scoreInfo () {
        let scoreInfoReturn = `\nScore : \nYou : ${humanScore} | Computer : ${computerScore}`;
        return scoreInfoReturn;
    }

    function playRound (humanChoice , computerChoice) {
        // Human win conditions
        let humanWins = `You did it! , Computer chose ${computerChoice}`;
        if (humanChoice == "rock" && computerChoice == "sissors")
            humanScore++ , alert(humanWins + scoreInfo());
        else if (humanChoice == "paper" && computerChoice == "rock")
            humanScore++ , alert(humanWins + scoreInfo());
        else if (humanChoice == "sissors" && computerChoice == "paper")
            humanScore++ , alert(humanWins + scoreInfo());
        else if (humanChoice == computerChoice)
            alert("Draw!" + scoreInfo())
        else 
            computerScore++ , alert(`Computer chose ${computerChoice} , You lose!` + scoreInfo()); // otherwise computer wins
    }

    alert("The game starts here! consisting of 5 rounds");
    for (let i = 0 ; i < 5 ; i++)
        playRound(getHumanChoice(i + 1) , getComputerChoice());
    
    alert(`Final score : \nYou : ${humanScore} | Computer : ${computerScore}`);
}

playGame();
