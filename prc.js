const prompt = require("prompt-sync")();

function getComputerChoice()
{
    const prc = ["rock", "paper", "scissors"];
    const random= Math.floor(Math.random() * prc.length);
    return prc[random];
}

let computerscore = 0
let playerscore = 0

function oneRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    { 
        return "it's a tie!"
    }

    else if (playerSelection == "rock" && computerSelection == "scissors")
    { 
        playerscore++;
        return "hell yeah brother! rock beats scissors!"
    }

    else if (playerSelection == "rock" && computerSelection == "paper")
    {
        computerscore++;
        return "yo you suck, paper beats rock!"
    }

    else if (playerSelection == "paper" && computerSelection == "rock")
    {
        playerscore++;
        return "ayo! paper beats rock!"
    }

    else if (playerSelection == "paper" && computerSelection == "scissors")
    {   
        computerscore++
        return "Boooo scissors beats paper"
    }

    else if (playerSelection == "scissors" && computerSelection == "rock")
    { 
        computerscore++;
        return "oof. rock beats scissors."
    }

    else if (playerSelection == "scissors" && computerSelection == "paper")
    { 
        playerscore++;
        return "hell yeah, scissors slashes paper"
    }

    else
    {
        return "u wrong";
    }
}

function fiveRounds()
{
    for (i = 0; i < 5; i++)
    {
        let playerPrompt = prompt("Paper, Rock, or Scissors? ");
        let playerSelection = playerPrompt.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(oneRound(playerSelection, computerSelection, computerscore, playerscore));
        console.log(playerscore, computerscore);

        if(computerscore == 3)
        {
            console.log("COMPUTER WINS")
            break;
        }
        if(playerscore == 3)
        {
            console.log("PLAYER WINS")
            break;
        }
    }
}
fiveRounds();