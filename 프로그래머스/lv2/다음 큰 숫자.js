// https://programmers.co.kr/learn/courses/30/lessons/12911?language=javascript

// 1001110
// 1001111
// 1010000
// 1010001
// 1010010
// 1010011

let n = 78;
let nString = n.toString(2);
let nCount = 0;
for(let i=0; i<nString.length; i++) {
  if(nString[i] === '1') nCount++;
}

let answer = n + 1;

while(true) {
  let aString = answer.toString(2);
  let aCount = 0;
  for(let i=0; i<aString.length; i++) {
    if(aString[i] === '1') aCount++;
  }
  
  if(aCount === nCount) break;
  else answer++;
}

console.log(answer)