// https://programmers.co.kr/learn/courses/30/lessons/17679?language=javascript

let m = 4;
let n = 5;
let board = [
    "TTTANT",
    "RRFACC",
    "RRRFCC",
    "TRRRAA",
    "TTMMMF",
    "TMMTTJ"
]

board = board.map(e => e.split(''))

let stack = [];
let count = 0;

let flag = true;

while (flag) {
    flag = false;
    for (let i = 0; i <= board.length - 2; i++) {
        for (let j = 0; j <= board[i].length - 2; j++) {
            if (board[i][j] === board[i][j + 1] &&
                board[i][j] === board[i + 1][j] &&
                board[i][j] === board[i + 1][j + 1] &&
                board[i][j] !== ' ') {
                stack.push([i, j]);
                flag = true;
            }
        }
    }

    while (stack.length !== 0) {
        let tmp = stack.pop();
        if(board[tmp[0]][tmp[1]] !== ' ') {
            board[tmp[0]][tmp[1]] = ' ';
            count++;
        }
        if(board[tmp[0]][tmp[1]+1] !== ' ') {
            board[tmp[0]][tmp[1]+1] = ' ';
            count++;
        }
        if(board[tmp[0]+1][tmp[1]] !== ' ') {
            board[tmp[0]+1][tmp[1]] = ' ';
            count++;
        }
        if(board[tmp[0]+1][tmp[1]+1] !== ' ') {
            board[tmp[0]+1][tmp[1]+1] = ' ';
            count++;
        }
    }

    for (let i = board.length - 1; 0 <= i; i--) {
        for (let j = board[i].length - 1; 0 <= j; j--) {
            if (board[i][j] === ' ') {
                let ti = i;
                
                while(0 < ti && board[ti][j] === ' ') ti--;
                
                board[i][j] = board[ti][j];
                board[ti][j] = ' ';
            }
        }
    }
}

console.log(board);
console.log(count)
