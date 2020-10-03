// https://programmers.co.kr/learn/courses/30/lessons/67257?language=javascript

let expression = '100-200*300-500+20';

let max = 0;

let ops = ['*', '+', '-'];
const calculate = (exps, ops, pri) => {
  if(pri === 3) return Number(exps);

  
  let ns = exps.split(ops[pri]);
  let answer = calculate(ns[0], ops, pri+1);
  
  switch (ops[pri]) {
    case '*':
      for(let i=1; i<ns.length; i++) {
        answer *= calculate(ns[i], ops, pri+1);
      };
      break;
    case '+':
      for(let i=1; i<ns.length; i++) {
        answer += calculate(ns[i], ops, pri+1);
      };
      break;
    case '-':
      for(let i=1; i<ns.length; i++) {
        answer -= calculate(ns[i], ops, pri+1);
      };
      break;
  }
  return answer;
};

const permutation = (inputs, outputs, r) => {
  if (r === 0) {
    let tmp = calculate(expression, outputs, 0);
    if(tmp < 0) tmp = Math.abs(tmp);
    if(max < tmp) max = tmp;
  }

  for (let i = 0; i < inputs.length; i++) {
    outputs.push(inputs.splice(i, 1)[0]);
    r--;

    permutation(inputs, outputs, r);

    inputs.splice(i, 0, outputs.pop());
    r++;
  }
};

permutation(ops, [], 3);

console.log(max);
