// https://programmers.co.kr/learn/courses/30/lessons/64065?language=javascript

let s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";

s = s.substring(2, s.length-2);
s = s.split('},{');

let tuples = s.map(ss => {
  let tuple = [];
  let n = '';
  [...ss].forEach((ch, i) => {
    if('0' <= ch && ch <= '9') n += ch;
    else if(ch === ',') {
      tuple.push(Number(n));
      n = '';
    }
    if(i === ss.length-1) tuple.push(Number(n));
  })
  return tuple;
});

let result = [];
let count = 1;
while(count <= tuples.length) {
  for(let i=0; i<tuples.length; i++) {
    if(count === tuples[i].length) {
      tuples[i].forEach(e => {
        if(!result.includes(e)) {
          result.push(e);
          count++;
        }
      })
    }
  }
}

console.log(result)