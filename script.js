let userChoice ;
let computerChoice;

let userScore = 0;
let compuertScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const score_board = document.querySelector("score-board");
const paper_div = document.getElementById("p");
let operation = document.getElementById("operation");
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

    switch(userChoice+computerTurnChoice){
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
        console.log("USER WINS!!");
            userScore+=1;
            updateChoice();
            break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            console.log("Computer Wins!!");
            computerScore+=1;
            updateChoice;
            break;
    }
}

function updateChoice(){ 
        userChoice = "0";
        computerChoice = "0";  
}
