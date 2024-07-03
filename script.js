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
const gameCellList=gameBoard.querySelectorAll(".cell")


let firstGame=false;
let nameUpdated=false;
let play=true;
let player1_win_statement;
let player2_win_statement;
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
    const resetToken=()=>{
        token="x";
    }
    const resetCurrentplayer=()=>{
        currentPlayer="player1";
    }
    return {getToken,changePlayer,getCurrentPlayer,resetToken,resetCurrentplayer}
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
        nameUpdated=true;
        player1_win_statement=`${playerName.playerOne} Won`;
        player2_win_statement=`${playerName.playerTwo} Won`;
    })
    
    if(!firstGame){
        reset.remove();
    }
      
})



// token function

let tokenUpdater=(function(){
    let tokenCount=0;
    const tokenUpdate=()=>{
        tokenCount++;
    }
    const getTokenCount=()=>{
        return tokenCount;
    }
    const tokenZero=()=>{
        tokenCount=0;
    }

    return {tokenUpdate,getTokenCount,tokenZero}
})();



// play round function

const playRound=(event)=>{
    if(!nameUpdated){
        resultStatement.textContent="Please input player names";
    }
    else{
        if(play) {
            if(event.target.textContent==""){
                if(nextPlayer.getToken()=="x"){
                    event.target.textContent="X";
                    nextPlayer.changePlayer();
                    tokenUpdater.tokenUpdate();
                }
                else{
                    event.target.textContent="O";
                    nextPlayer.changePlayer();
                    tokenUpdater.tokenUpdate();
                }
            }
        }
    }
}
// virtual game board

const virtualGameBoard=((event)=>{
    let cell1;
    let cell2;
    let cell3;
    let cell4;
    let cell5;
    let cell6;
    let cell7;
    let cell8;
    let cell9;
    let cellId;
    const cellUpdate=(event)=>{
        cellId=parseInt(event.target.id.substring(5));
        if(cellId==1){
            cell1=nextPlayer.getToken();
        }
        else if(cellId==2){
            cell2=nextPlayer.getToken();
        }
        else if(cellId==3){
            cell3=nextPlayer.getToken();
        }
        else if(cellId==4){
            cell4=nextPlayer.getToken();
        }
        else if(cellId==5){
            cell5=nextPlayer.getToken();
        }
        else if(cellId==6){
            cell6=nextPlayer.getToken();
        }
        else if(cellId==7){
            cell7=nextPlayer.getToken();
        }
        else if(cellId==8){
            cell8=nextPlayer.getToken();
        }
        else if(cellId==9){
            cell9=nextPlayer.getToken();
        }
    }
    const getCellValues = () => {
        return {
            cell1,
            cell2,
            cell3,
            cell4,
            cell5,
            cell6,
            cell7,
            cell8,
            cell9
        };
    };
    const cellReset=()=>{
        cell1="";
        cell2="";
        cell3="";
        cell4="";
        cell5="";
        cell6="";
        cell7="";
        cell8="";
        cell9="";
    }
    return {cellUpdate,getCellValues,cellReset}
})();




// win checking function

const winUpdate=()=>{
    
    if(tokenUpdater.getTokenCount()>4){
        let { cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9 } = virtualGameBoard.getCellValues();
        if(cell1==cell2 && cell2==cell3){
            if(cell1==="x"){
                resultStatement.textContent=player1_win_statement;
            }
            else{
                resultStatement.textContent=player2_win_statement;
            }
            play=false;
            playerTwoNameBar.classList.remove("current"); 
            playerOneNameBar.classList.remove('current');
        }
        else if(cell4==cell5 && cell5==cell6){
            if(cell4=="x"){
                resultStatement.textContent=player1_win_statement;
            }
            else{
                resultStatement.textContent=player2_win_statement;
            }
            play=false;
            playerTwoNameBar.classList.remove("current"); 
            playerOneNameBar.classList.remove('current');
        }
        else if(cell7==cell8 && cell8==cell9){
            if(cell7=="x"){
                resultStatement.textContent=player1_win_statement;
            }
            else{
                resultStatement.textContent=player2_win_statement;
            }
            play=false;
            playerTwoNameBar.classList.remove("current"); 
            playerOneNameBar.classList.remove('current');
        }
        else if(cell1==cell4 && cell4==cell7){
            if(cell7=="x"){
                resultStatement.textContent=player1_win_statement;
            }
            else{
                resultStatement.textContent=player2_win_statement;
            }
            play=false;
            playerTwoNameBar.classList.remove("current"); 
            playerOneNameBar.classList.remove('current');
        }
        else if(cell2==cell5 && cell5==cell8){
            if(cell2=="x"){
                resultStatement.textContent=player1_win_statement;
            }
            else{
                resultStatement.textContent=player2_win_statement;
            }
            play=false;
            playerTwoNameBar.classList.remove("current"); 
            playerOneNameBar.classList.remove('current');
        }
        else if(cell3==cell6 && cell3==cell9){
            if(cell3=="x"){
                resultStatement.textContent=player1_win_statement;
            }
            else{
                resultStatement.textContent=player2_win_statement;
            }
            play=false;
            playerTwoNameBar.classList.remove("current"); 
            playerOneNameBar.classList.remove('current');
        }
        else if(cell1==cell5 && cell5==cell9){
            if(cell1=="x"){
                resultStatement.textContent=player1_win_statement;
            }
            else{
                resultStatement.textContent=player2_win_statement;
            }
            play=false;
            playerTwoNameBar.classList.remove("current"); 
            playerOneNameBar.classList.remove('current');
        }
        else if(cell3==cell5 && cell5==cell7){
            if(cell7=="x"){
                resultStatement.textContent=player1_win_statement;
            }
            else{
                resultStatement.textContent=player2_win_statement;
            }
            play=false;
            playerTwoNameBar.classList.remove("current"); 
            playerOneNameBar.classList.remove('current');
        }
    }
}

gameBoard.addEventListener("click",(e)=>{
    if (e.target.classList.contains("cell")) {
        virtualGameBoard.cellUpdate(e);
        playRound(e);
        if(firstGame==false){
            firstGame=true;
            gameReset.appendChild(reset);
        }

    }
    winUpdate();
})

reset.addEventListener('click',()=>{
    resultStatement.textContent="";
    virtualGameBoard.cellReset();
    gameCellList.forEach(cell=>{
        cell.textContent="";
    })
    reset.remove();
    firstGame=false;
    playerOneNameBar.classList.add("current");
    playerTwoNameBar.classList.remove("current");
    tokenUpdater.tokenZero();
    play=true;
    nextPlayer.resetToken();
    nextPlayer.resetCurrentplayer();
})



// things left 
//               update "play" after someone is won
//              place the virtualGameBoard before changeToken
                 