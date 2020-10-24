// https://programmers.co.kr/learn/courses/30/lessons/49994?language=javascript

let dirs = "RRRRRR";

let i = 5;
let j = 5;

let mySet = new Set();

[...dirs].forEach(v => {
    let tmp1;
    let tmp2;
    if (v === 'U' && 1 <= i) {
        tmp1 = '' + i + j + (i - 1) + j;
        tmp2 = '' + (i - 1) + j + i + j
        i--;
        mySet.add(tmp1);
        mySet.add(tmp2);
    } else if (v === 'D' && i <= 9) {
        tmp1 = '' + i + j + (i + 1) + j;
        tmp2 = '' + (i + 1) + j + i + j;
        i++;
        mySet.add(tmp1);
        mySet.add(tmp2);
    } else if (v === 'L' && 1 <= j) {
        tmp1 = '' + i + j + i + (j - 1);
        tmp2 = '' + i + (j - 1) + i + j;
        j--;
        mySet.add(tmp1);
        mySet.add(tmp2);
    } else if (v === 'R' && j <= 9) {
        tmp1 = '' + i + j + i + (j + 1);
        tmp2 = '' + i + (j + 1) + i + j;
        j++;
        mySet.add(tmp1);
        mySet.add(tmp2);
    }
});

console.log(mySet.size / 2)
