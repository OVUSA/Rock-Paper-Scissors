let userChoice ;
let computerChoice;

let userScore = 0;
let compuertScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const score_board = document.querySelector("score-board");
const paper_div = document.getElementById("p");
main();

/** random computer choice */
function getComputerChoice(){
    const choice = ["paper","rock","scissors"];
    const result = Math.floor(Math.random()*choice.length);
    console.log(choice[result])
    computerTurnChoice =choice[result];   
}

function main(){
   paper_div.addEventListener('click', function(){game("paper");})
   rock_div.addEventListener("click",()=>{ game("rock");})
   scissors.addEventListener("click",()=>{ game("scissors");})
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log(`User choice :${userChoice}, against :${computerChoice}`);
    deretmineWiner();
}

/**
 * Algorithm to determine the winner of the round
 */
function deretmineWiner(){
    if(userChoice ==="paper" && computerChoice ==="scissors"){
        console.log("Computer win!")
        computerScore +=1;
        updateChoice();
    }else if(userChoice ==="scissors" && computerChoice ==="paper"){
        console.log("User wins!");
        userScore+=1;
        updateChoice();
    }else if(userChoice ==="scissors" && computerChoice ==="rock"){
        console.log("Computer wins!");
        computerScore+=1;
        updateChoice();
    }else if(userChoice ==="rock" && computerChoice ==="scissors"){
        console.log("User wins!");
        userScore+=1;
        updateChoice();
    }else if(userChoice ==="paper" && computerChoice ==="rock"){
        console.log("User wins!");
        userScore+=1;
        updateChoice();
    }else if(userChoice ==="rock" && computerChoice ==="paper"){
        console.log("Computer wins!");
        computerScore+=1;
        updateChoice();
    }
console.log(`Current score is ${userScore} : ${computerScore}`)
}

function updateChoice(){ 
        userChoice = "0";
        computerChoice = "0";  
}
