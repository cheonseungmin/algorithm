// https://programmers.co.kr/learn/courses/30/lessons/68645

let n = 4;

// let n = 6
let arr = [];
for(let i=1; i<=n; i++) arr.push(Array(i).fill(0));
let end = 0;
for(let i=1; i<=n; i++) end += i;

let direction = ['down', 'right', 'up'];

let idx = 0;
let count = 1;
let i=0;
let j=0;
while(count <= end) {
  if(direction[idx] === 'down') {
    while(true) {
      arr[i][j] = count++;

      if(i+1 === arr.length || arr[i+1][j] !== 0) {
        j++;
        break;
      }
      i++;
    }
  }
  else if(direction[idx] === 'right') {
    while(true) {
      arr[i][j] = count++;
      
      if(j+1 === arr[i].length || arr[i][j+1] !== 0) {
        i--; j--;
        break;
      }
      j++;
    }
  } else if(direction[idx] === 'up') {
    while(true) {
      arr[i][j] = count++;
      
      if(arr[i-1][j-1] !== 0) {
       i++;
       break;
      }
      i--; j--;
    }
  }
  
  idx = idx + 1 === direction.length? 0: idx + 1;
}

let answer = arr.reduce((acc, cur) => {
  cur.forEach(e => acc.push(e));
  return acc;
}, []);

console.log(arr)
console.log(answer);