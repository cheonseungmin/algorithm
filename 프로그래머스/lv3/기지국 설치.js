// https://programmers.co.kr/learn/courses/30/lessons/12979?language=javascript

let N = 16
let stations = [9];
let W = 2;

// #3
stations.sort((a, b) => a - b);
stations.push(N + W + 1);
let answer = 0;
let start = 1;
stations.forEach(end => {
    console.log(start)
    let length = (end - W) - start
    console.log(length)
    console.log(end)
    answer += Math.ceil(length / ((2 * W) + 1));
    start = end + W + 1;
});
console.log(answer);

// #2 failed
//stations = stations.map(s => s - 1);
//let apartments = Array(N);
//stations.forEach(s => {
//    for (let i = s - W; i <= s + W; i++) {
//        if (0 <= i && i < N) apartments[i] = true;
//    }
//});
//
//let max = W * 2 + 1;
//
//let answer = 0;
//
//for (let i = 0; i < apartments.length;) {
//    if (apartments[i] === true) {
//        i++;
//    } else {
//        let count = 0;
//        while (apartments[i + count] !== true && count < max) count++;
//        for (let j = i; j < i + count; j++) apartments[j] = true;
//        i += count;
//        answer++;
//    }
//}
//
//console.log(answer)

// #1 failed
//let answer = 200000000;
//
//const f = (start, count) => {
//    if (apartments.length <= start) {
//        if (apartments.every(a => a !== -1)) {
//            if (count < min) min = count;
//        }
//        return;
//    }
//
//    for (let i = start; i < apartments.length; i++) {
//        let flag = false;
//
//        if (apartments[i] === -1) {
//            flag = true;
//            count++;
//            for (let j = i - W; j <= i + W; j++) {
//                if ((0 <= j && j < N) &&
//                   apartments[j] === -1) apartments[j] = count;
//            }
//
//            f(start + W + 1, count);
//
//            for (let j = i - W; j <= i + W; j++) {
//                if ((0 <= j && j < N) &&
//                   apartments[j] === count) apartments[j] = -1;
//            }
//            count--;
//        } else {
//            f(start + 1, count);
//        }
//    }
//}
//
//f(2, 0);
//
//console.log(answer);
