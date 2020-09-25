// https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

// let brown = 10;
// let yellow = 2;
// let answer = 0;

let brown = 24;
let yellow = 24;

for(let col=1; col<= yellow; col++) {
  if(yellow % col === 0) {
    let row = yellow / col;
    if(row <= col && (row+2)*(col+2) === brown+yellow) {
      console.log([col+2, row+2])
    }
  }
}
