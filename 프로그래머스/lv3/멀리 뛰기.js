let n = 5;

let arr = [0, 1, 1];

for (let i = 3; i <= n; i++) arr[i] = (2 * arr[i - 2] + arr[i - 1]) % 1234567;

console.log(arr[n])
