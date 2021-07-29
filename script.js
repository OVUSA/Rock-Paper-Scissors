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
/**
 * 
 */
 paper_div.addEventListener('click', function(){
    console.log("You choice paper")
})

let rock_div = document.getElementById("r");
rock_div.addEventListener("click",()=>{
    console.log("You choice rock")
})


let scissors = document.getElementById("s");
scissors.addEventListener("click",()=>{
    console.log("You choose scissors")
})
