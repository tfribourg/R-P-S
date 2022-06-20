 pSelect = prompt('what is your choice?');
 pSelect = pSelect.toLowerCase();
 




function compPlay(){
    let compChoice = ['rock', 'paper', 'scissor'];
    let cSelect = compChoice[Math.floor(Math.random()* compChoice.length)];
    return cSelect
}

let cSelect = compPlay();


function playRound(pSelect, cSelect) {
    if (pSelect == 'rock' & cSelect == 'rock'){
        return 'Tie'
    }
    if (pSelect == 'rock' & cSelect == 'paper'){
        return 'Lose'

    }


}
