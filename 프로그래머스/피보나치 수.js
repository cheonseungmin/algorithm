// https://programmers.co.kr/learn/courses/30/lessons/12945?language=javascript

let n = 5;

let arr = Array(n+1);

arr[0] = 0;
arr[1] = 1;

for(let i=2; i<=n; i++) arr[i] = arr[i-1] + arr[i-2];

let answer = arr[n] % 1234567

console.log(answer)