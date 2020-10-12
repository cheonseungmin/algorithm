// https://programmers.co.kr/learn/courses/30/lessons/17677?language=javascript

let str1 = 'aa1+aa2';
let str2 = 'AAAA12';

str1 = str1.toUpperCase();
str2 = str2.toUpperCase();

let arr1 = [];
let arr2 = [];

for (let i = 0; i < str1.length - 1; i++) arr1.push(str1.substring(i, i + 2));
for (let i = 0; i < str2.length - 1; i++) arr2.push(str2.substring(i, i + 2));

arr1 = arr1.filter(e => {
    if (
        ('A' <= e[0] && e[0] <= 'Z') &&
        ('A' <= e[1] && e[1] <= 'Z')
    ) return true;
    else return false;
});

arr2 = arr2.filter(e => {
    if (
        ('A' <= e[0] && e[0] <= 'Z') &&
        ('A' <= e[1] && e[1] <= 'Z')
    ) return true;
    else return false;
});

if (arr1.length === 0 && arr2.length === 0) return 65536;

let intersecting = [];
let union = [];

let tmp = [...arr2];

arr1.forEach(e => {
    if (tmp.includes(e)) {
        let idx = tmp.indexOf(e);
        tmp.splice(idx, 1);
        intersecting.push(e);
    }
});

let tmp1 = [...arr1];
let tmp2 = [...arr2];

while (0 < tmp1.length) {
    let e = tmp1.pop();
    if (tmp2.includes(e)) {
        let idx = tmp2.indexOf(e);
        tmp2.splice(idx, 1);
        union.push(e);
    } else {
        union.push(e);
    }
}

union = union.concat(tmp2);

let J = Math.floor(intersecting.length / union.length * 65536);

console.log(J);
