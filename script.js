 var compChoice;
 var winner;
 var playerPoints=0;
 var compPoints=0;

function getComputerChoice(){
    //function that randomize computer choice
    var randomNumber = Math.floor(Math.random()*3)+1; //random number from 1 to 3
    console.log(randomNumber);
    if(randomNumber === 1){
        compChoice = "rock";
    }
    else if(randomNumber === 2){
        compChoice = "paper";
    }
    else if(randomNumber === 3){
        compChoice = "scissor";
    }else{
        console.log("error"); 
    }
    console.log(compChoice);
    return compChoice;
}

function playRound(){
    var userInput = prompt("Choose your weapon (rock, paper or scissor): ");
    var playerChoice = userInput.toLowerCase();
    console.log("Wprowadzony łańcuch:", playerChoice);
    getComputerChoice()
    if(playerChoice === "paper" && compChoice === "paper"){//1. paper vs paper
        winner = "both";
        console.log("computer chose paper, draw!");
    }else if(playerChoice === "paper" && compChoice === "rock"){//2. paper vs rock
        winner = "player";
        console.log("computer chose rock, you won!");
    }else if(playerChoice === "paper" && compChoice === "scissor"){//3. paper vs scissor
        winner = "computer";
        console.log("computer chose scissor, you lost!");
    }    if(playerChoice === "rock" && compChoice === "paper"){//4. rock vs paper
        winner = "computer";
        console.log("computer chose paper, you lost!");
    }else if(playerChoice === "rock" && compChoice === "rock"){//5. rock vs rock
        winner = "both";
        console.log("computer chose rock, draw!");
    }else if(playerChoice === "rock" && compChoice === "scissor"){//6. rock vs scissor
        winner = "player";
        console.log("computer chose scissor, you won!");
    }    if(playerChoice === "scissor" && compChoice === "paper"){//7. scissor vs paper
        winner = "player";
        console.log("computer chose paper, you won!");
    }else if(playerChoice === "scissor" && compChoice === "rock"){//8. scissor vs rock
        winner = "computer";
        console.log("computer chose rock, you lost!");
    }else if(playerChoice === "scissor" && compChoice === "scissor"){//9. scissor vs scissor
        winner = "both";
        console.log("computer chose scissor, draw!");
    }

    return winner;
}

function game(){
    playRound()//round 1
    if(winner === "player"){
        playerPoints += 1;
    }else if(winner === "computer"){
        compPoints += 1;
    }else {
        playerPoints +=1;
        compPoints +=1;
    }
    playRound()//round 2
    if(winner === "player"){
        playerPoints += 1;
    }else if(winner === "computer"){
        compPoints += 1;
    }else {
        playerPoints +=1;
        compPoints +=1;
    }
    playRound()//round 3
    if(winner === "player"){
        playerPoints += 1;
    }else if(winner === "computer"){
        compPoints += 1;
    }else {
        playerPoints +=1;
        compPoints +=1;
    }
    playRound()//round 4
    if(winner === "player"){
        playerPoints += 1;
    }else if(winner === "computer"){
        compPoints += 1;
    }else {
        playerPoints +=1;
        compPoints +=1;
    }
    playRound()//round 5
    if(winner === "player"){
        playerPoints += 1;
    }else if(winner === "computer"){
        compPoints += 1;
    }else {
        playerPoints +=1;
        compPoints +=1;
    }
    //checking who won game
        if(playerPoints > compPoints){
        console.log("player won");
    }else if(compPoints > playerPoints){
        console.log("computer won");
    }else {
        console.log("draw!");
    }
    
}
//getComputerChoice();
//console.log(compChoice);
//playRound();
//console.log(winner);

game();
console.log(playerPoints);
console.log(compPoints);