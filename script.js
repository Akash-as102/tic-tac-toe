const playerNameBar=document.querySelector("#player_name_bar");
const gameReset=document.querySelector("#game_reset");
const getPlayerNames=document.querySelector("#get_player_names");
const nameSpace=document.querySelector("#name_space");
const playerOneName=document.querySelector("#playeronename");
const playerTwoName=document.querySelector("#playertwoname");
const submit=document.querySelector("#submit");
const playerOneNameBar=document.querySelector("#playeronenamebar");
const playerTwoNameBar=document.querySelector("#playertwonamebar");
const reset=document.querySelector("#reset");
const gameBoard=document.querySelector("#gameboard");
const resultStatement=document.querySelector("#result_statement");

let firstGame=false;
let playerDetail=(player1name,player2name)=>{
    const playerOne=player1name;
    const playerTwo=player2name;
    return {playerOne,playerTwo};
}
// next player selector function 
let nextPlayer=(function(){
    let currentPlayer="player1";
    let token="x";
    const getToken=()=>{
        return token;
    }
    const getCurrentPlayer=()=>{
        return currentPlayer;
    }
    const changePlayer=()=>{
        if(currentPlayer=="player1"){
            currentPlayer="player2";
            playerOneNameBar.classList.remove('current');
            playerTwoNameBar.classList.add("current");
            token="o"
        }
        else{
            currentPlayer="player1";
            playerOneNameBar.classList.add('current');
            playerTwoNameBar.classList.remove("current"); 
            token="x"
        }
    }
    return {getToken,changePlayer,getCurrentPlayer}
})();

document.addEventListener("DOMContentLoaded",()=>{
    playerNameBar.remove();
    playerOneNameBar.classList.add("current");
    getPlayerNames.addEventListener("submit",(event)=>{
        event.preventDefault();
        let playerName=playerDetail(playerOneName.value,playerTwoName.value);
        playerOneNameBar.textContent=playerName.playerOne;
        playerTwoNameBar.textContent=playerName.playerTwo;
        getPlayerNames.remove();
        nameSpace.appendChild(playerNameBar);
        resultStatement.textContent="";
    })
    if(!firstGame){
        reset.remove();
    }
      
})



// token function

let tokenUpdater=(function(){
    let tokenCount=0;
    const tokenUpdate=()=>{
        tokenUpdate++;
    }
    const getTokenCount=()=>{
        return tokenCount;
    }
    const tokenZero=()=>{
        tokenCount=0;
    }

    return {tokenUpdate,getTokenCount,tokenZero}
})();



// play round

const playRound=()=>{
    if(playerDetail.playerOne==undefined || playerDetail.playerTwo==undefined){
        resultStatement.textContent="Please input player names";
    }
    else{
        
    }
}

gameBoard.addEventListener("click",(e)=>{
    if (e.target.classList.contains("cell")) {
        playRound();
    }
})

// finished till token switch function

// remaining:    playround and update the each cell 

//               winUpdate function which checks for whether the anyone has won

//               remember to use the token counter. 

                 