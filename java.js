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
    console.log(pSelect, cSelect)
    if (pSelect == 'rock' & cSelect == 'rock'){
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
    } else if (pSelect=='paper' & cSelect=='paper'){

        return 'Tie'
    } else if (pSelect=='paper' & cSelect=='scissor'){
        cpuScore +=1;
        return 'Lose'
    } else if (pSelect== 'scissor' & cSelect=='rock'){
        cpuScore +=1;
        return 'Lose';  
    } else if (pSelect=='scissor' & cSelect=='paper'){
        myScore +=1;
        return 'Win' ; 
    } else if (pSelect=='scissor'&cSelect=='sissor') {
        return 'Tie'; 
        
    }

}


//global variable for comp choice

//const pSelect = 'rock';


//game function loop

const game = () =>{
    for(let i=0; i<5; i++){
        const cSelect = compPlay();
        pSelect = prompt('what is your choice?');
        pSelect = pSelect.toLowerCase();
        console.log(playRound(pSelect, cSelect))
        console.log('User Score- '+myScore+ ' CPU Score-  '+cpuScore)
    }
}
game()


    


