// https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript

let s = 'baabaa';
//let s = 'cdcd'

let stack = [s[0]];

for(let i=1; i<s.length; i++) {
    if(stack[stack.length-1] === s[i]) stack.pop();
    else stack.push(s[i]);
}

let answer = stack.length === 0? 1: 0;

console.log(answer);