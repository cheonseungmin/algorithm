// https://programmers.co.kr/learn/courses/30/lessons/17687?language=javascript

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, ...
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,  1,  0,  1,  1,  1, ,2 ...

let n = 2;

let t = 4;

let m = 2;

let p = 1;


let number = 0;
let s = number.toString(n);

let tn = 1;

let pn = 1;

let tmp;

let answer = '';

while (tn <= t) {
    tmp = s.substring(0, 1);
    s = s.substring(1);

    if (pn === p) {
        answer += tmp;
    }

    pn++;

    if (m < pn) {
        pn = 1;
        tn++;
    }

    if (s === '') {
        number++;
        s = number.toString(n);
    }
}

answer = answer.toUpperCase();
console.log(answer)
