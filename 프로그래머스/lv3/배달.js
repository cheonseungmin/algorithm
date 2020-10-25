// https://programmers.co.kr/learn/courses/30/lessons/12978?language=javascript

let N = 5;

let road = [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2], [1, 4, 3]];

let K = 3;

let table = Array(N + 1);
for (let i = 1; i <= N; i++) table[i] = [];

let cost = Array(N + 1);
for (let i = 1; i <= N; i++) cost[i] = Array(N + 1);

road.forEach(r => {
    if (!table[r[0]].includes(r[1])) {
        table[r[0]].push(r[1]);
        cost[r[0]][r[1]] = r[2];
        
        table[r[1]].push(r[0]);
        cost[r[1]][r[0]] = r[2];
    } else {
        if (r[2] < cost[r[0]][r[1]]) {
            cost[r[0]][r[1]] = r[2];
            cost[r[1]][r[0]] = r[2];
        }
    }
});

let queue = [1];
let result = [];
result[0] = 0;
result[1] = 0;
for(let i=2; i<=N; i++) result[i] = N * 500001;

while(queue.length !== 0) {
    let start = queue.shift();
    table[start].forEach(end => {
        if(result[start] + cost[start][end] < result[end]) {
            result[end] = result[start] + cost[start][end];
            queue.push(end);
        }
    });
}

let answer = result.filter(r => r <= K).length - 1;
console.log(answer)