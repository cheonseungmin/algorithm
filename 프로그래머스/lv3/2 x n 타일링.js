// https://programmers.co.kr/learn/courses/30/lessons/12900?language=javascript

let n = 4;

let dp = Array(n + 1);
dp[1] = 1;
dp[2] = 2;
for (let i = 3; i <= n; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
console.log(dp)
console.log(dp[n]);
