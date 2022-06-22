 // variables for keeping score
 
 let myScore = 0;
 let cpuScore = 0 ;
 //play choice
 

 
//comp choices

function compPlay(){
    let compChoice = ['rock', 'paper', 'scissor'];
    let cSelect = compChoice[Math.floor(Math.random()* compChoice.length)];
    return cSelect
}



//main game function
function playRound(pSelect, cSelect) {
    console.log(pSelect +' v ' + cSelect)

    if (pSelect == cSelect){
        cpuScore +=1; myScore+=1;
        return 'Tie'
    } else if (pSelect == 'rock' & cSelect == 'paper'){
        cpuScore +=1;
        return 'Lose'
    } else if (pSelect == 'rock' & cSelect == 'scissor'){
        myScore +=1;
        return 'Win'
    } else if (pSelect=='paper' & cSelect=='rock'){
        myScore+=1;
        return 'Win'
    } if (pSelect=='paper' & cSelect=='scissor'){
        cpuScore +=1;
        return 'Lose'
    } else if (pSelect== 'scissor' & cSelect=='rock'){
        cpuScore +=1;
        return 'Lose';  
    } else if (pSelect=='scissor' & cSelect=='paper'){
        myScore +=1;
        return 'Win' ; 
    }  
        
    }







//game function loop

const game = () =>{
    for(let i=0; i<5; i++){
        const cSelect = compPlay();
        pSelect = prompt('what is your choice?');
        pSelect = pSelect.toLowerCase();
        console.log(playRound(pSelect, cSelect))
        console.log('User Score- '+myScore+ ' CPU Score-  '+cpuScore)
    }
    if (myScore > cpuScore){
        console.log('WEENER')
    } else if (myScore < cpuScore){
        console.log('LOSER')
    }
}
game()


    
 

