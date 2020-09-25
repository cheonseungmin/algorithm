// https://programmers.co.kr/learn/courses/30/lessons/42885

let people = [70, 50, 80, 50];

let limit = 100;

let count = 0;

people.sort((a, b) => a - b);
while(0 < people.length) {
console.log(people);
console.log(people.length-1);
  if(people[0] + people[people.length-1] <= limit) {
    people.pop();
    people.shift();
    count++;
  } else {
    people.pop();
    count++;
  }
}

console.log(count);
