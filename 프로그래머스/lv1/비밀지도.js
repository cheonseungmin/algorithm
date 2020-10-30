// https://programmers.co.kr/learn/courses/30/lessons/17681

let n = 5;

let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

let a1 = arr1.map(a => {
    let tmp = a.toString(2).split('');
    tmp = tmp.map(t => Number(t));
    while (tmp.length < n) tmp.unshift(0);
    return tmp;
});

let a2 = arr2.map(a => {
    let tmp = a.toString(2).split('');
    tmp = tmp.map(t => Number(t));
    while (tmp.length < n) tmp.unshift(0);
    return tmp;
});

let answer = a1.map((a, i) => {
    return a.reduce((acc, cur, j) => {
        if (cur === 1 || a2[i][j] === 1) {
            acc += '#';
        } else acc += ' ';
        return acc;
    }, '');
});

console.log(answer)
