function getComputerChoice () {
    let ret;
    let rand = Math.random();

    // This is a bit off but anything works for now 
    if (rand <= 0.333)
        ret = "Rock";
    else if (rand <= 0.666)
        ret = "Paper";
    else 
        ret = "Sissors"

    return ret;
}

console.log(getComputerChoice());
