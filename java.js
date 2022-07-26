 // variables for keeping score
 
 let myScore = 0;
 let cpuScore = 0 ;
 let pSelect
 let cSelect = compPlay()
 const results = document.querySelector('.results')
 const playerScoreSpan = document.querySelector('.player-score')
 const compScoreSpan = document.querySelector('.comp-score')

const updateScore = (myScore, cpuScore) => {
    playerScoreSpan.textContent=`Player - ${myScore}`
    compScoreSpan.textContent= `CPU - ${cpuScore}`

}

 //comp choices

function compPlay(){
    let compChoice = ['rock', 'paper', 'scissor'];
    let cSelect = compChoice[Math.floor(Math.random()* compChoice.length)];
    return cSelect
}
 //play choice
 
const buttons = document.querySelectorAll('rk, sr, pr')

    rk.addEventListener('click', () => { 
        pSelect = 'rock';
        playRound(pSelect, cSelect);
        game() ; checkWin(myScore,cpuScore) 
        updateScore(myScore, cpuScore)
    })
    sr.addEventListener('click', () => { 
        pSelect = 'scissor';
        playRound(pSelect, cSelect)
        game(); checkWin(myScore, cpuScore)
        updateScore(myScore, cpuScore)
    })
    pr.addEventListener('click', () => { 
        pSelect = 'paper';
        playRound(pSelect, cSelect)
        game(); checkWin(myScore, cpuScore)
        updateScore(myScore, cpuScore)
    })

//main game function
function playRound(pSelect, cSelect) {
    //console.log(pSelect +' v ' + cSelect)
    if (pSelect == cSelect){
        const p = document.createElement('p')
        
        p.textContent= 'Tie'
        results.appendChild(p)
    } else if (pSelect == 'rock' & cSelect == 'paper'){
        const p = document.createElement('p')
        cpuScore +=1;
        p.textContent= 'Lose'
        results.appendChild(p)
    } else if (pSelect == 'rock' & cSelect == 'scissor'){
        const p = document.createElement('p')
        myScore +=1;
        p.textContent= 'Win'
        results.appendChild(p)
    } else if (pSelect=='paper' & cSelect=='rock'){
        const p = document.createElement('p')
        myScore+=1;
        p.textContent='Win'
        results.appendChild(p)
    } if (pSelect=='paper' & cSelect=='scissor'){
        const p = document.createElement('p')
        cpuScore +=1;
        p.textContent= 'Lose'
        results.appendChild(p)
    } else if (pSelect== 'scissor' & cSelect=='rock'){
        const p = document.createElement('p')
        cpuScore +=1;
        p.textContent= 'Lose'; 
        results.appendChild(p) 
    } else if (pSelect=='scissor' & cSelect=='paper'){
        const p = document.createElement('p')
        myScore +=1;
        p.textContent= 'Win' ; 
        results.appendChild(p)
    }    }

//game function loop

const game = () =>{
    //for(let i=0; i<5; i++){
        cSelect = compPlay();
        //pSelect = prompt('what is your choice?');
        //pSelect = pSelect.toLowerCase();
        //console.log(playRound(pSelect, cSelect))
        console.log('User Score- '+myScore+ ' CPU Score-  '+cpuScore)
    }
    /*if (myScore > cpuScore){
        console.log('WEENER')
    } else if (myScore < cpuScore){
        console.log('LOSER')
    } */

const checkWin = (myScore, cpuScore) => {
    if (myScore === 5 ) {
        const h2 = document.createElement('h2')
        h2.classList.add('pWon')
        h2.textContent= 'You win'
        results.appendChild(h2)
    }
    else if (cpuScore === 5){
        const h2 = document.createElement('h2')
        h2.classList.add('cpuWon')
        h2.textContent= 'CPU wins'
        results.appendChild(h2)
    }
}



