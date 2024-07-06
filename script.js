const instruction = document.querySelector("#round");
const buttons = document.querySelectorAll("div.buttons");
const playRoundText = document.querySelector("div.playround");

// Computer generates Rock, paper or scissor
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

// Compare the values and say who won
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
function playRound(humanButtonChoice){
    let computerChoice = getComputerChoice();
    let humanChoice = humanButtonChoice;
    let winningElement = getWinningElement(humanChoice, computerChoice);
    let winner = getWinner(computerChoice, humanChoice);
    let winnerText = getWinnerText(winner) + '' + getWinningElementText(winningElement);
    playRoundText.textContent = winnerText;
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
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        instruction.textContent = `Round ${i+1}/5`;
        winner = playRound(humanChoice);
        if(winner == "Computer" ){
            computerScore++;
        }else if (winner=="Human"){
            humanScore++;
        }else{
            continue;
        }
        instruction.textContent = `SELECT AN OPTION`;
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

/* GETTING HUMAN CHOICE USING BUTTON
    var: humanChoice
    output: rock/paper/scissor
    input: button click
    procedure:
        Game will start after only button click 
        add event listener to buttons and let them start*/

function playGame(){
    buttons.forEach((button)=>{
        button.addEventListener("click",(button)=>{
            let humanChoice = button.target.id;
            playRound(humanChoice);
        });
    });
}

playGame();
