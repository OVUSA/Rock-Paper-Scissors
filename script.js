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

function game(selection){
    userChoice = selection;
    computerChoice = getComputerChoice();
    operation.innerHTML = `You choose: ${selection}, \n
     Computer choose : ${computerChoice}`;
    deretmineWiner();
}

function win(){
    console.log("USER WINS!!");
    userScore+=1;
    userScore_span.innerHTML = userScore;
    updateChoice();

}

function lost(){
    console.log("Computer Wins!!");
            computerScore+=1;
            computerScore_span.innerHTML = computerScore;
            updateChoice;

}
/**
 * Algorithm to determine the winner of the round
 */
function deretmineWiner(){

    switch(userChoice+computerTurnChoice){
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            win();
            break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            lost();
            break;
    }
}

function updateChoice(){ 
        userChoice = "0";
        computerChoice = "0";  
}
