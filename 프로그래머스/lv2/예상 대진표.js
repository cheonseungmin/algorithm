let N = 8;

let A = 4;

let B = 7;
//
//let N = 8;
//
//let A = 2;
//
//let B = 3;

//12 34 56 78
//let count = 1;
//
//while (Math.abs(A - B) !== 1) {
//    count++;
//    if (A % 2 === 0) {
//        A /= 2;
//    } else A = (A + 1) / 2
//    if (B % 2 === 0) {
//        B /= 2;
//    } else B = (B + 1) / 2;
//}

let count = 1;

let max = A < B ? B : A;
let min = A < B ? A : B;

while (true) {
    if (max - min === 1) break;
    count++;
    if (max % 2 === 0) {
        max /= 2;
    } else max = (max + 1) / 2
    if (min % 2 === 0) {
        min /= 2;
    } else min = (min + 1) / 2;
}

console.log(count);
