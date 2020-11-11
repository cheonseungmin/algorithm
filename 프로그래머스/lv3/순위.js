// https://programmers.co.kr/learn/courses/30/lessons/49191?language=javascript

//let n = 5;
//let results = [
//    [4, 3],
//    [4, 2],
//    [3, 2],
//    [1, 2],
//    [2, 5]
//];

let n = 2;
let results = [
];

let table = [];
for (let i = 0; i < n; i++) table[i] = new Array(n).fill(0);

results.forEach(result => {
    table[result[0] - 1][result[1] - 1] = 1;
    table[result[1] - 1][result[0] - 1] = -1;
});


let winQueue = [];
for (let i = 0; i < n; i++) winQueue.push(i)

while (winQueue.length !== 0) {
    let now = winQueue.shift();
    let tmp = [];
    table[now].forEach((fight, next) => {
        if (fight === 1) {
            winQueue.push(next);
            tmp.push(next);
        }
    });

    tmp.forEach(next => {
        for (let i = 0; i < n; i++)
            if (table[next][i] === 1) table[now][i] = 1;
    });
}


let loseQueue = [];
for (let i = 0; i < n; i++) loseQueue.push(i);

while (loseQueue.length !== 0) {
    let now = loseQueue.shift();
    let tmp = [];
    table[now].forEach((fight, next) => {
        if (fight === -1) {
            loseQueue.push(next);
            tmp.push(next)
        }
    });

    tmp.forEach(next => {
        for (let i = 0; i < n; i++)
            if (table[next][i] === -1) table[now][i] = -1;
    });
}

let answer = table.filter(t1 => t1.filter(t2 => t2 === 0).length === 1).length;
console.log(answer)



//let check = new Array(n).fill(false);
//let ranking = new Array(n + 1).fill(n);
//
//const f = (result, checkIdx) => {
//    let [start, end] = result;
//    for (let i = 0; i < results.length; i++) {
//        if (results[i][0] === end) {
//            f(results[i], i);
//        }
//    }
//    
//    ranking[start] = ranking[end] - 1;
//}
//
//for(let i = 0; i<results.length; i++) {
//    if(!check[i]) f(results[i], i);
//}
//
//ranking.shift();
//let answer = ranking.filter(e => ranking.filter(tmp => e === tmp ).length < 2).length;
