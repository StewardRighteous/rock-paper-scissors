/* ROCK, PAPER AND SCISSORS GAME ALGORITHM:
    1. Computer generates Rock, paper or scissor
    2. Get value from user for Rock, paper and scissor
    3. Compare the value and say say who won
    4. Give points to the person won
    5. Final Winner Message */

// Computer generates Rock, paper and scissor
    /*  variables : randomNumber, choice
        output : Rock/ paper/ scissors
        input : null
        procedure:
            Generate Random Number
            Change that number into Rock or paper or scissors
            Store it as computer Choice */

function getComputerChoice(){
    let randomNumber = Math.random();
    let choice = convertNumToChoice(randomNumber);
    return choice;  
}

function convertNumToChoice(randomNumber){
    if (randomNumber<= 0.3){
        return "Rock";
    }else if(randomNumber<= 0.6){
        return "Paper";
    }else{
        return "Scissors";
    }
}

let computerChoice = getComputerChoice();

// Get value form user for Rock Paper and Scissor
    /*  variables : shortFormChoice, choice
        output: Rock/ paper/ Scissors
        input: user gives R/P/S (short form)
        procedure:
            Create a prompt to get value (shortform)
            convert shortForm to choice
            Store it as Human Choice */

function getHumanChoice(){
    let shortFormChoice = prompt(`Rock(R), Paper(P) and Scissors(S) - Enter your Choice : `);
    let choice = convertShortFormToChoice(shortFormChoice);
    return choice;
}

function convertShortFormToChoice(shortFormChoice){
    switch (shortFormChoice){
        case "R" || "r":
            return "Rock"
        case "P" || "p":
            return "Paper"
        case "S" || "s":
            return "Scissors";
        default:
            console.error("Wrong Input Value \n Enter R for Rock, P for Paper, S for Scissors ");
    }
}

let humanChoice = getHumanChoice();
