// https://programmers.co.kr/learn/courses/30/lessons/12905?language=javascript

let board = [
  [0,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [0,0,1,0]
];

let max = 0;
for(let i=1; i<board.length; i++) {
  for(let j=1; j<board[i].length; j++) {
    if(board[i][j] === 0) continue;
    let min = Math.min(board[i-1][j-1], board[i-1][j], board[i][j-1]);
    board[i][j] += min;
    max = max < board[i][j]? board[i][j]: max
  }
}

console.log(max);