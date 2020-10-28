// https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript

let n = 3;

//let computers = [
//    [1, 1, 0],
//    [1, 1, 1],
//    [0, 1, 1]
//];

//let computers = [
//    [1, 1, 0],
//    [1, 1, 0],
//    [0, 0, 1]
//];

let computers = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

let table = Array(n + 1);
for (let i = 0; i <= n; i++) table[i] = [];


for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (computers[i][j] === 1 &&
            i !== j) table[i + 1].push(j + 1);
    }
}

let network = Array(n + 1).fill(0);
let connect = 1;
network[0] = n;
network[1] = connect;
let next = 1;
let queue = [next];

while (queue.length !== 0) {
    let start = queue.shift();
    if (network[start] === 0) {
        connect++;
        network[start] = connect;
    };
    table[start].forEach(end => {
        if (network[end] === 0) {
            network[end] = connect;
            queue.push(end);
        }
    });
    if (queue.length === 0 &&
        network.some(e => e !== 0) &&
        next < n) {
        next++;
        queue.push(next);
    }
}

console.log(connect);
