// https://programmers.co.kr/learn/courses/30/lessons/42587

let priorities = [2, 1, 3, 2];
// let priorities = [1, 1, 9, 1, 1, 1];

let location = 2;
// let location = 0;

let pivot = 0;

while(pivot < priorities.length) {
  let flag = true;
  for(let i=pivot; i<priorities.length; i++) {
    if(priorities[pivot] < priorities[i]) {
      priorities.push(priorities.splice(pivot, 1)[0]);
      flag = false;
      
      if(pivot < location) {
        location = location - 1;
      } else if(location === pivot) {
        location = priorities.length - 1;
      }
      
      break;
    }
  }
  
  if(flag) {
    pivot++;
  }
}

console.log(priorities);
console.log(location + 1);