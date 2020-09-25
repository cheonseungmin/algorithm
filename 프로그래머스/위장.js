// https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

let clothes = [['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']];

let type = {};

clothes.forEach(e => {
  if(type[e[1]]) type[e[1]]++;
  else type[e[1]] = 2;
})

let answer = 1;

for(let t in type) {
  answer *= type[t];
}

answer--;

console.log(answer - 1)