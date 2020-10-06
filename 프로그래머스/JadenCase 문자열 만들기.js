// https://programmers.co.kr/learn/courses/30/lessons/12951?language=javascript

let s = '3people unFollowed me';

let sArr = s.split(' ');
let answer = sArr.map(e => {
    let tmp = e.toLowerCase();
    if('a' <= tmp[0] && tmp[0] <= 'z') {
        let c = String.fromCharCode(tmp.charCodeAt(0)-32);
        return tmp.replace(/[a-z]/, c);
    }
    return tmp;
}).join(' ');

console.log(answer);
