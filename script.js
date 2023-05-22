 var compChoice;
function getComputerChoice(){
    //function that randomize computer choice
    var randomNumber = Math.floor(Math.random()*3)+1; //random number from 1 to 3
    console.log(randomNumber);
    if(randomNumber === 1){
        compChoice = "Rock";
    }
    else if(randomNumber === 2){
        compChoice = "Paper";
    }
    else if(randomNumber === 3){
        compChoice = "Scissor";
    }else{
        console.log("error"); 
    }
    //console.log(compChoice);
    return compChoice;
}

getComputerChoice();
console.log(compChoice);