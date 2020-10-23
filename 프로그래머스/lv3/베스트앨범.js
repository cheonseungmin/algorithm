// https://programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

let genres = ["classic", "pop", "classic", "classic", "pop", "test"]
let plays = [500, 600, 150, 800, 2500, 0];

let hash1 = {};
let hash2 = {};

genres.forEach((g, i) => {
    if (hash1[g]) {
        hash1[g] += plays[i];
        hash2[g].push([i, plays[i]]);
    } else {
        hash1[g] = plays[i];
        hash2[g] = [[i, plays[i]]];        
    };
});

for(let h in hash2) hash2[h].sort((a, b) => b[1] - a[1]);

let tmp = [];
for (let h in hash1) tmp.push([h, hash1[h]]);
tmp.sort((a, b) => b[1] - a[1]);


let answer = [];
tmp.forEach(t => {
    for(let i=0; i<2; i++) answer.push(hash2[t[0]].shift());
});
answer = answer.filter(e => e !== undefined);
answer = answer.map(e => e[0]);

console.log(answer)