// https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript

let d = [1];

let budget = 9;

d.sort((a, b) => a - b);

for (let i = 0; i < d.length; i++) {
    budget -= d[i];

    if (budget === 0) {
        console.log(i + 1);
        break;
    }
    else if (budget < 0) {
        console.log(i)
        break   
    }
}
console.log(d.length)