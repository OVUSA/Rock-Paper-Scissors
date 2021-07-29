let userTurn= true;
let compuertTurn =false;


let userChoice ;
let computerChoice;

let userScore = 0;
let compuertScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const score_board = document.querySelector("score-board");
const paper_div = document.getElementById("p");

main();

/**
 *  random computer choice
 */
function getComputerChoice(){
    const choice = ["paper","rock","scissors"];
    const result = Math.floor(Math.random()*choice.length);
    console.log(choice[result])
    computerTurnChoice =choice[result];
    
}

function main(){
   paper_div.addEventListener('click', function(){makeTurn("paper");})
   rock_div.addEventListener("click",()=>{makeTurn("rock");})
   scissors.addEventListener("click",()=>{makeTurn("scissors");})

}
