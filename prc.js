const prompt = require("prompt-sync")();

function getComputerChoice()
{
    const prc = ["Rock", "Paper", "Scissors"];
    const random= Math.floor(Math.random() * prc.length);
    return prc[random];
}

//check computer choice
console.log(getComputerChoice());

let playerPrompt = prompt ("Paper, Rock, or Scissors? ");
let playerSelection = playerPrompt.toLowerCase();

//check if player selection works
console.log(playerSelection);
