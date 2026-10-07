function getComputerChoice () {
    let ret;
    let rand = Math.random();

    // This is a bit off but anything works for now 
    if (rand <= 0.333)
        ret = "rock";
    else if (rand <= 0.666)
        ret = "paper";
    else 
        ret = "sissors"

    return ret;
}

function getHumanChoice () {
    let humanChoice = window.prompt("Enter Your Choice :");
    humanChoice.toLowerCase();
    return humanChoice;
}

console.log(`Computer Choice : ${getComputerChoice()}`);
console.log(`Human Choice : ${getHumanChoice()}`);
