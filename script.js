 var compChoice;
 var winner;
 var playerPoints=0;
 var compPoints=0;
 var gameCounter =0;

function getComputerChoice(){
    //function that randomize computer choice
    var randomNumber = Math.floor(Math.random()*3)+1; //random number from 1 to 3
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
    return compChoice;
}

function playRound(playerChoice){
    var resultDiv = document.getElementById("resultDiv");
    getComputerChoice()
    if(playerChoice === "paper" && compChoice === "paper"){//1. paper vs paper
        winner = "both";
        resultDiv.textContent = "computer chose paper, draw!";
    }else if(playerChoice === "paper" && compChoice === "rock"){//2. paper vs rock
        winner = "player";
        resultDiv.textContent = "computer chose rock, you won!";
    }else if(playerChoice === "paper" && compChoice === "scissor"){//3. paper vs scissor
        winner = "computer";
        resultDiv.textContent = "computer chose scissor, you lost!";
    }    

    if(playerChoice === "rock" && compChoice === "paper"){//4. rock vs paper
        winner = "computer";
        resultDiv.textContent = "computer chose paper, you lost!";
    }else if(playerChoice === "rock" && compChoice === "rock"){//5. rock vs rock
        winner = "both";
        resultDiv.textContent = "computer chose rock, draw!";
    }else if(playerChoice === "rock" && compChoice === "scissor"){//6. rock vs scissor
        winner = "player";
        resultDiv.textContent = "computer chose scissor, you won!";
    }   

     if(playerChoice === "scissor" && compChoice === "paper"){//7. scissor vs paper
        winner = "player";
        resultDiv.textContent = "computer chose paper, you won!";
    }else if(playerChoice === "scissor" && compChoice === "rock"){//8. scissor vs rock
        winner = "computer";
        resultDiv.textContent = "computer chose rock, you lost!";
    }else if(playerChoice === "scissor" && compChoice === "scissor"){//9. scissor vs scissor
        winner = "both";
        resultDiv.textContent = "computer chose scissor, draw!";
    }

    pointsCounter();
    gameCounter++;

    if (gameCounter === 5){
        var gameWinner = determineGameWinner();
        resultDiv.textContent = "Game over! The winner is " + gameWinner + "." + " Player Points: " + playerPoints + " Computer Points: " + compPoints;
        disableButtons();
    } 

    return winner;
}

function pointsCounter(){
    if(winner === "player"){
        playerPoints += 1;
    }else if(winner === "computer"){
        compPoints += 1;
    }else {
        playerPoints +=1;
        compPoints +=1;
    }

    //console.log(playerPoints);
    //console.log(compPoints);
}

function determineGameWinner(){
    if (playerPoints > compPoints){
        return "Player";
    }else if (playerPoints < compPoints) {
        return "Computer";
    }else {
        return "draw";
    }
}

function disableButtons() {
    var gameButtons = document.querySelectorAll("#paperBtn, #rockBtn, #scissorBtn");
    gameButtons.forEach(function (button) {
        button.disabled = true;
    });
}

function enableButtons() {
    var gameButtons = document.querySelectorAll("#paperBtn, #rockBtn, #scissorBtn");
    gameButtons.forEach(function (button) {
        button.disabled = false;
    });
}

function resetGame() {
    playerPoints = 0;
    compPoints = 0;
    gameCounter = 0;

    var resultDiv = document.getElementById("resultDiv");
    resultDiv.textContent = "";

    enableButtons();
}

var paperBtn = document.getElementById("paperBtn");
var rockBtn = document.getElementById("rockBtn");
var scissorBtn = document.getElementById("scissorBtn");
var resetBtn = document.getElementById("resetBtn");

paperBtn.addEventListener("click", function() {
    playRound("paper")
});

rockBtn.addEventListener("click", function() {
    playRound("rock")
});

scissorBtn.addEventListener("click", function() {
    playRound("scissor")
});

resetBtn.addEventListener("click", function() {
    resetGame();
});
