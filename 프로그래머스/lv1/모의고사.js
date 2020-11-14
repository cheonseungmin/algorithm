// https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

//let answers = [1, 2, 3, 4, 5];
let answers = [1, 3, 2, 4, 2]

let p1 = [1, 2, 3, 4, 5];
let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

let count = [[1, 0], [2, 0], [3, 0]];

answers.forEach((a, i) => {
    if (a === p1[i % 5]) count[0][1]++;
    if (a === p2[i % 8]) count[1][1]++;
    if (a === p3[i % 10]) count[2][1]++;
});

let answer = count.sort((a, b) => b[1] - a[1]).filter(e => count[0][1] === e[1]).map(e => e[0])
console.log(answer)
