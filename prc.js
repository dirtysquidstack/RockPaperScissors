function getComputerChoice()
{
    const prc = ["Rock", "Paper", "Scissors"];
    const random= Math.floor(Math.random() * prc.length);
    return prc[random];
}

console.log(getComputerChoice());

