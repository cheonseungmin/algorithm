// https://programmers.co.kr/learn/courses/30/lessons/68646?language=javascript

let a = [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33];

// 작 0 큰 0 << -16 >> 작 5 큰 4 O
// 작 1 큰 0 <<  27 >> 작 6 큰 2 X
// 작 0 큰 5 << -92 >> 작 0 큰 4 O
// 작 2 큰 0 <<  65 >> 작 7 큰 0 X
// 작 2 큰 5 << -68 >> 작 0 큰 2 O
// 작 1 큰 5 << -71 >> 작 0 큰 3 O

//let a = [9, -1, -5];


if (a.length <= 3) return a.length;

let lm = [a[0]];
for (let i = 0; i < a.length; i++) {
    if (a[i] < lm[lm.length - 1]) lm.push(a[i]);
    else lm.push(lm[lm.length - 1]);
}

let rm = [a[a.length-1]];
for (let i = a.length-1; 0 <= i; i--) {
    if (a[i] < rm[rm.length - 1]) rm.push(a[i]);
    else rm.push(rm[rm.length - 1]);
}
rm = rm.reverse();

let count = 0;

for (let i = 0; i < a.length; i++) if (!(lm[i] < a[i] && rm[i] < a[i])) count++;


console.log(count);
