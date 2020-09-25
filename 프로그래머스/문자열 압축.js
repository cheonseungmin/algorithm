// https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript

let s = 'aabbaccc';

let answer = s.length;

let number = 1;

while (number <= s.length / 2) {
  let sArr = [];
  for (let i = 0; i < s.length; i += number) {
    sArr.push(s.substring(i, i + number));
  }
  
  let ansArr = [];
  let count = 1;
  sArr.reduce((acc, cur, idx) => {
    if (acc === cur) {
      count++;
    } else {
      ansArr.push((count === 1? '': count) + acc);
      count = 1;
    }
    
    if(idx === sArr.length - 1)
      return ansArr.push((count === 1? '': count) + cur);
    else return cur;
  });

  let sLength = ansArr.join('').length;
  answer = (answer < sLength)? answer: sLength;

  number++;
}

console.log(answer);