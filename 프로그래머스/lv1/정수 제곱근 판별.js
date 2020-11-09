let n = 121;

n = Math.sqrt(n);
let tmp = Math.floor(n);
let answer = (0 < n - tmp)? (n+1)**2: -1;

console.log(answer)