// https://programmers.co.kr/learn/courses/30/lessons/64061

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let moves = [1, 5, 3, 5, 1, 2, 1, 4];
moves = moves.map((move) => move - 1);

let basket = [];

moves.forEach((move) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][move] !== 0) {
      basket.push(board[i][move]);
      board[i][move] = 0;
      break;
    }
  }
});

let count = 0;
let flag = true;

while (flag) {
  flag = false;
  for (let i = 0; i < basket.length - 2; i++) {
    if (basket[i + 1] && basket[i] === basket[i + 1]) {
      count += 2;
      basket = basket.slice(0, i).concat(basket.slice(i + 2, basket.length));
      flag = true;
    }
  }
}


console.log(count);
