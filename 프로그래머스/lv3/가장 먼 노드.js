// https://programmers.co.kr/learn/courses/30/lessons/49189

let n = 6;

let vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];

let table = Array(n + 1);
for (let i = 1; i <= n; i++) table[i] = [];

vertex.forEach(v => {
    table[v[0]].push(v[1]);
    table[v[1]].push(v[0]);
});

let queue = [1];
let cost = Array(n + 1).fill(50000);
cost[0] = 0;
cost[1] = 0;

while(queue.length !== 0) {
    let start = queue.shift();
    table[start].forEach(end => {
        if(cost[end] > cost[start] + 1) {
            cost[end] = cost[start] + 1;
            queue.push(end);
        }
    });
};
let max = Math.max(...cost);

let answer = cost.filter(c => c === max).length;

console.log(answer);
