/* ROCK, PAPER AND SCISSORS GAME ALGORITHM:
    1. Computer generates Rock, paper or scissor
    2. Get value from user for Rock, paper and scissor
    3. Compare the value and say say who won
    4. Give points to the person won
    5. Final Winner Message */

// Computer generates Rock, paper or scissor
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

// Get value form user for Rock Paper and Scissor
    /*  variables : shortFormChoice, choice
        output: Rock/ paper/ Scissors
        input: user gives R/P/S (short form)
        procedure:
            Create a prompt to get value (shortform)
            convert shortForm to choice
                IF human gave unknown choice THEN return error
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
            return "Error";
    }
}

// Compare the values and say who won
    /*  variables : computerChoice, humanChoice, combineChoice, winner
        output: Computer or Human
        input : computerChoice, humanChoice
        procedure:
            Get user and computer choices
            Create conditions that returns which wins
                IF rock AND scissors THEN rock
                IF scissors AND paper THEN scissors
                IF paper and rock THEN paper
                IF both are same THEN draw
            Use that value to return the winner name or draw*/

function getWinner(computerChoice, humanChoice){
    let winningElement = getWinningElement(computerChoice,humanChoice);
    let winner = checkWinningElement(winningElement, computerChoice, humanChoice);
    return winner;
}

function getWinningElement(c1, c2){  // c is for choice
    if ((c1 == "Rock" && c2 == "Scissors")||(c2 == "Rock" && c1 == "Scissors")){
        return "Rock"
    }else if((c1 == "Scissors" && c2 == "Paper")||(c2 == "Scissors" && c1 == "Paper")){
        return "Scissors"
    }else if((c1 == "Paper" && c2== "Rock")||(c2 == "Paper" && c1== "Rock")){
        return "Paper"
    }else{
        return "draw"
    }
}

function checkWinningElement(winningElement, computerChoice, humanChoice){
    if(winningElement == computerChoice){
        return "Computer";
    }else if(winningElement == humanChoice){
        return "Human";
    }else{
        return "draw"
    }
}

//Give points to the person who won
    /*  variables: humanChoice, computerChoice, computerPoint, humanPoint, winner
        output: Point goes to YOU or COMPUTER
        input: winner
        procedure:
            Have initial points as 0 for both human and computer
            Get values for both human and computer
                IF human gave unknown choice THEN return nothing and start again
            Find the winner 
            Print who won followed by element they chose as sentence
                find who won or draw
                find element that won
            Add points to winner*/

function playground(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if(humanChoice == "Error"){
        return;
    }
    let winningElement = getWinningElement(humanChoice, computerChoice);
    let winner = getWinner(computerChoice, humanChoice);
    let winnerText = getWinnerText(winner) + '' + getWinningElementText(winningElement);
    console.log(winnerText);
    return winner;
}

function getWinnerText(winner){
    if(winner == "Computer"){
        return "You lose!";
    }else if(winner == "Human"){
        return "You Win!";
    }else{
        return "Draw! ";
    }
}

function getWinningElementText(winningElement){
    if (winningElement == "Rock"){
        return "Rock beats Scissors!";
    }else if(winningElement == "Scissors"){
        return "Scissors cuts paper!";
    }else if(winningElement == "Paper"){
        return "Paper covers Rock!";
    } else{
        return "You both chose the same!";
    }
}

// Final Winner Message
    /*  variables: humanScore, computerScore, winner
        output: You WON or You LOST or DRAW
        input: humanScore, computerScore
        procedure:
            Initialize human and computer scores
            Loop 5 matches of playground and Increase values in each round according to winner
            After completing five rounds, print the winner using Alert
                IF human > computer THEN you WON
                IF computer > human THEN you LOST
                IF computer == human THEN DRAW */

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        winner = playground();
        if(winner == "Computer" ){
            computerScore++;
        }else if (winner=="Human"){
            humanScore++;
        }else{
            continue;
        }
    }
    whoWon = getWhoWon(humanScore, computerScore);
    alert(whoWon);
}

function getWhoWon(humanScore,computerScore){
    if(humanScore> computerScore){
        return "You Won!"
    }else if(computerScore>humanScore){
        return "You Lost!"
    }else{
        return "DRAW!"
    }
}

playGame();