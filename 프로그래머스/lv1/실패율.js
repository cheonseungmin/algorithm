// https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

let N = 8;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];

let answer = new Array(N);
stages.sort((a, b) => b - a);
let stage = 1;
let users = [];
while (stage < N + 1) {
    let user = (stages[stages.length-1] === stage)? stages.pop(): null;

    if (user) {
        users.push(user);
    } else {
        answer[stage - 1] = (users.length === 0)? [0, stage]: [(users.length / (users.length + stages.length)), stage];
        stage++;
        users = [];
    }
}
answer = answer.sort((a, b) => b[0] - a[0]).map(e => e[1]);
console.log(answer);