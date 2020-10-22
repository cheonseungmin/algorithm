// https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

let arr = [1, 1, 3, 3, 0, 1, 1];

let stack = [arr.shift()];
arr.forEach(e => {
    if(stack[stack.length-1] !== e) stack.push(e);
})

console.log(stack)