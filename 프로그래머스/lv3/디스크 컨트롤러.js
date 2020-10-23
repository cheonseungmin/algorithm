// https://programmers.co.kr/learn/courses/30/lessons/42627?language=javascript

let jobs = [
    [0, 3],
    [1, 9],
    [2, 6]
];

let n = jobs.length;

jobs.sort((a, b) => b[0] - a[0]);

let first = jobs.pop();
let time = first[0] + first[1];
let sum = first[1];

jobs.sort((a, b) => b[1] - a[1]);

while (jobs.length !== 0) {
    let next;
    for (let i = jobs.length - 1; 0 <= i; i--) {
        if (jobs[i][0] <= time) {
            next = jobs.splice(i, 1)[0];
            break;
        }
    }
    
    if(next) {
        time += next[1];
        sum += (time - next[0]);
    } else {
        jobs.sort((a, b) => b[0] - a[0]);
        let tmp = jobs.pop();
        time = tmp[0] + tmp[1];
        sum += time - tmp[0];
        jobs.sort((a, b) => b[1] - a[1]);
    }
}

let answer = Math.floor(sum / n);

console.log(answer)