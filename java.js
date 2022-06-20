 pSelect = prompt('what is your choice?');



function compPlay(){
    let compChoice = ['rock', 'paper', 'scissor'];
    let choice = compChoice[Math.floor(Math.random()* compChoice.length)];
    return choice
}

