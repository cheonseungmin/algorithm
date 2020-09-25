// https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

let numbers = [1, 1, 1, 1, 1];
let target = 3;

let count = 0;
const recursion = (inputs, cur) => {
  if(inputs.length === 0) {
    if(cur === target) count++;
    return;
  }
  
  recursion(inputs.slice(0, inputs.length-1), cur + inputs[inputs.length-1]);
  recursion(inputs.slice(0, inputs.length-1), cur - inputs[inputs.length-1]);
}

recursion(numbers, 0);

console.log(count)
