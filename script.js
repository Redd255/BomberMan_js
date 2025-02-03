const BoardSize = 15;
let playerX = 1;
let playerY = 1;
let score = 0;
let board = [];
let bombs = [];

function createBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    
    for (let y = 0; y < BoardSize; y++) {
        board[y] = [];
        for (let x = 0; x < BoardSize; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            
            if (x === 0 || y === 0 || x === BoardSize - 1 || y === BoardSize - 1 || 
                (x % 2 === 0 && y % 2 === 0)) {
                cell.classList.add('wall');
                board[y][x] = 'wall';
            } else if (Math.random() < 0.3 && !(x === 1 && y === 1)) {
                cell.classList.add('breakable');
                board[y][x] = 'breakable';
            } else {
                board[y][x] = 'empty';
            }
            
            gameBoard.appendChild(cell);
        }
    }
    
    placePlayer();
    updateScore(0);
}

function placePlayer() {
    const player = document.createElement('div');
    player.className = 'player';
    player.id = 'player';
    document.querySelector(`.cell:nth-child(${playerY * BoardSize + playerX + 1})`).appendChild(player);
}

createBoard();