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
    } else if (pSelect == 'rock' & cSelect == 'paper'){
        return 'Lose'
    } else if (pSelect == 'rock' & cSelect == 'scissor'){
        return 'Win'
    } else if (pSelect=='paper' & cSelect=='rock'){
        return 'Win'
    } else if (pSelect=='paper' & cSelect=='paper'){
        return 'Tie'
    } else if (pSelect=='paper' & cSelect=='scissor'){
        return 'Lose'
    } else if (pSelect== 'scissor' & cSelect=='rock'){
        return 'Lose'
    } else if (pSelect=='scissor' & cSelect=='paper'){
        return 'Win'
    } else if (pSelect=='scissor'&cSelect=='sissor') {
        return 'Tie'
    }

}
console.log(playRound(pSelect, cSelect))