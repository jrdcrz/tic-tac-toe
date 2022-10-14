const boxes = document.querySelectorAll('.box');
const playBtn = document.querySelector('#play');
const restartBtn = document.querySelector('#restart');
const notifMs = document.querySelector('#notif');
const p1Name = document.querySelector('.player-1');
const p2Name = document.querySelector('.player-2');

const drawBoard = () => {
    boxes.forEach((box, i) => {
        let styleString = '';
        if(i < 3){
            styleString += 'border-bottom: 3px solid var(--text);';
        }
        if(i % 3 === 0){
            styleString += 'border-right: 3px solid var(--text);';
        }
        if(i % 3 === 2){
            styleString += 'border-left: 3px solid var(--text);';
        }
        if( i > 5){
            styleString += 'border-top: 3px solid var(--text);';
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    })
}

const spaces = [];
Player1 = 'X';
Player2 = 'O';
let currentPlayer = Player1;

const boxClicked = (e) => {
    const id = e.target.id;
        
        if(!spaces[id]){
            spaces[id] = currentPlayer;
            e.target.innerText = currentPlayer;

            if (playerWon()){
                Text.innerText = `${currentPlayer} has won!`;
                restart();
                return;
            }
            if(playerDraw()) {
                return;
            }
            currentPlayer = currentPlayer === Player1 ? Player2 : Player1;
        }
};
const playerWon = () => {
    if (spaces[0] === currentPlayer){
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            notifMs.innerText = `${currentPlayer} wins`;
            return true;
        }
    
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
        notifMs.innerText = `${currentPlayer} wins`;
        return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer){
        notifMs.innerText = `${currentPlayer} wins`;
        return true;
    }
}

    if (spaces[8] === currentPlayer){
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            notifMs.innerText = `${currentPlayer} wins`;
            return true;
        }
    
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
        notifMs.innerText = `${currentPlayer} wins`;
        return true;
    }
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer){
        notifMs.innerText = `${currentPlayer} wins`;
        return true;
    }
}
    if (spaces[4] === currentPlayer){
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            notifMs.innerText = `${currentPlayer} wins`;
            return true;
        }
    
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer){
        notifMs.innerText = `${currentPlayer} wins`;
        return true;
    }
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
        notifMs.innerText = `${currentPlayer} wins`;
        return true;
    }
}
};
const playerDraw = () => {
    let draw = 0;
    spaces.forEach((spaces, i) => {
        if(spaces[i] !== null) draw++
    });
    if(draw === 9){
        notifMs.innerText = `Draw`;
        restart();
    }
}

const restart = () => {
    setTimeout(() => {
        spaces.forEach((spaces, i) => {
            spaces[i] = null;
        });
        boxes.forEach((box) => {
            box.innerText = '';
        })
        playBtn.innerText = `Play`;
        notifMs.innerText = ``;
        p1Name.innerText = ``;
        p2Name.innerText = ``;
    }, 2000);
}

const play = () => {
    var name1 = document.getElementById('Player1Name').value;
    var name2 = document.getElementById('Player2Name').value;
    p1Name.innerHTML = 'Player 1: '+ name1;
    p2Name.innerHTML = 'Player 2: '+ name2;
    drawBoard();
} 

playBtn.addEventListener('click', play);
restartBtn.addEventListener('click', restart);
restart();