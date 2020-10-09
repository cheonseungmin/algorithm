// https://programmers.co.kr/learn/courses/30/lessons/12913?language=javascript

let land = [
  [1,2,3,5],
  [5,6,7,8],
  [4,3,2,1]
];

// let max = 0;

// const recursion = (row, col, acc) => {
//   if(row+1 === land.length) {
//     if(max < acc) max = acc;
//     return;
//   }
  
//   for(let i=0; i<4; i++) {
//     if(i !== col) recursion(row+1, i, acc+land[row+1][i])
//   }
// }

// for(let i=0; i<4; i++) recursion(0, i, land[0][i]);

// console.log(max)

for(let i=1; i<land.length; i++) {
  for(let j=0; j<4; j++) {
    
    let max = land[i][j];
    for(let k=0; k<4; k++) {
      if(k !== j && max < land[i-1][k] + land[i][j] ) {
        max = land[i-1][k] + land[i][j]
      }
    }
    
    land[i][j] = max;
  }
}

console.log(Math.max(...land[land.length-1]))