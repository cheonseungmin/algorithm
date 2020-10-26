// https://programmers.co.kr/learn/courses/30/lessons/12987?language=javascript

let A = [5, 1, 3, 7];
let B = [2, 2, 6, 8];

//A.sort((a, b) => a - b);
A.sort((a, b) => a - b);
B.sort((a, b) => a - b);

let i = 0;
let j = 0;

while (j < B.length) {
    if (A[i] < B[j]) {
        i++;
        j++;
    } else {
        j++;
    }
}

console.log(i);
