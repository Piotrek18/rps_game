 var compChoice;
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
        console.log("draw!");
    }else if(playerChoice === "paper" && compChoice === "rock"){//2. paper vs rock
        console.log("player wins!");
    }else if(playerChoice === "paper" && compChoice === "scissor"){//3. paper vs scissor
        console.log("computer wins!");
    }    if(playerChoice === "rock" && compChoice === "paper"){//4. rock vs paper
        console.log("computer wins!");
    }else if(playerChoice === "rock" && compChoice === "rock"){//5. rock vs rock
        console.log("draw!");
    }else if(playerChoice === "rock" && compChoice === "scissor"){//6. rock vs scissor
        console.log("player wins!");
    }    if(playerChoice === "scissor" && compChoice === "paper"){//7. scissor vs paper
        console.log("player wins!");
    }else if(playerChoice === "scissor" && compChoice === "rock"){//8. scissor vs rock
        console.log("computer wins!");
    }else if(playerChoice === "scissor" && compChoice === "scissor"){//9. scissor vs scissor
        console.log("draw!");
    }
}

//getComputerChoice();
//console.log(compChoice);
playRound();