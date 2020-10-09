// https://programmers.co.kr/learn/courses/30/lessons/12939?language=javascript

let s = '1 2 3 4';

let sArr = s.split(' ').map(n => Number(n));

let min = Math.min(...sArr);
let max = Math.min(...sArr);

let answer = min + ' ' + max;
