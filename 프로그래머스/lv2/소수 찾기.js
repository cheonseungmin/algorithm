// https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

let numbers = '011';

let primeSet = new Set();

const primeCheck = (n) => {
  if (n === 0 || n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const permutations = (inputs, outputs, r) => {
  if (r === 0) {
    let n = Number(outputs.join(''));
    if (primeCheck(n)) primeSet.add(n);
  }

  for (let i = 0; i < inputs.length; i++) {
    outputs.push(inputs.splice(i, 1)[0]);
    r--;

    permutations(inputs, outputs, r);

    inputs.splice(i, 0, outputs.pop());
    r++;
  }
};

for (let i = 1; i <= numbers.length; i++) {
  permutations([...numbers], [], i);
}

console.log(primeSet.size);
