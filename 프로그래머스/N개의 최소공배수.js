// https://programmers.co.kr/learn/courses/30/lessons/12953?language=javascript

let arr = [2, 6, 8, 14];
let commons = [];

const checkDisjoint = (arr) => {
    let sorted = arr.sort((a, b) => b - a);
    let count;
    let n;
    
    for(n = 2; n<=sorted[1]; n++) {
        count = sorted.reduce((acc, cur) => {
            if(cur % n === 0) return acc + 1;
            else return acc;
        }, 0)
        if(1< count) break;
    }
    
    if(1 < count) return n;
    else return false;
}

while(true) {
    let n = checkDisjoint(arr);
    if(n) {
        commons.push(n);
        arr = arr.map(e => {
            if(e % n === 0) return e / n;
            else return e;
        })
    } else break;
}

let answer = arr
    .reduce((acc, cur) => {
        return acc * cur;
    }, 1) * commons
    .reduce((acc, cur) => {
        return acc * cur;
    }, 1);

console.log(commons);
console.log(arr);
console.log(answer);