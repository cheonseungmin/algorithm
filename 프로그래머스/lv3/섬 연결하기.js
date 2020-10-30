let n = 5

let costs = [
    [0, 1, 5],
    [1, 2, 3],
    [2, 3, 3],
    [3, 1, 2],
    [3, 0, 4],
    [2, 4, 6],
    [4, 0, 7]
]

let vt = new Array(n);
for (let i = 0; i < n; i++) vt[i] = [];

let ct = new Array(n);
for (let i = 0; i < n; i++) ct[i] = new Array(n).fill(0);

costs.forEach(c => {
    vt[c[0]].push(c[1]);
    vt[c[1]].push(c[0]);

    ct[c[0]][c[1]] = c[2];
    ct[c[1]][c[0]] = c[2];
});

let start = [0];
let end = [];
for (let i = 1; i < n; i++) end.push(i);

let answer = 0;

while(end.length !== 0) {
    let min = Number.MAX_SAFE_INTEGER;
    let mv;
    start.forEach(s => {
       vt[s].forEach(e => {
           if(ct[s][e] < min && !start.includes(e)) {
               min = ct[s][e];
               mv = e;
           }
       }) 
    });
    
    let idx = end.indexOf(mv);
    answer += min;
    start.push(end.splice(idx, 1)[0]);
}

console.log(answer)
