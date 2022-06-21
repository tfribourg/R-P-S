 // variables for keeping score
 
 const myScore = 0
 const cpuScore = 0 
 //play choice
 
 pSelect = prompt('what is your choice?');
 pSelect = pSelect.toLowerCase();
 
//comp choices

function compPlay(){
    let compChoice = ['rock', 'paper', 'scissor'];
    let cSelect = compChoice[Math.floor(Math.random()* compChoice.length)];
    return cSelect
}



//main game function
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
        cpuScore +=1;
        return 'Lose';
        
    } else if (pSelect=='scissor' & cSelect=='paper'){
        myScore ++
        return 'Win' ; 
        
    } else if (pSelect=='scissor'&cSelect=='sissor') {
        return 'Tie'; 
        
    }

}


//global variable for comp choice
const cSelect = compPlay();
const pSelect = 'rock'
console.log(playRound(pSelect, cSelect))

//game function loop

const game = () =>{
    for(let i=0; i<5; i++)
}


    


