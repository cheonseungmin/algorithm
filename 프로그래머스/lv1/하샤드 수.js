let arr = 11;

let n = [...String(arr)].reduce((acc, cur) => acc + Number(cur), 0);

let answer = arr % n === 0? true: false;

console.log(n)