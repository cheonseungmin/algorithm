//let s = "abcdcba";
//let s = "daadj"; // 5
//let s = "abba"; // 4
//let s = "abcabcdcbae"
let s = "abacde"

let range = s.length;

while (-1 < range) {
    for (let start = 0; start <= s.length - range; start++) {
        let half;
        let left;
        let right;
        if (range % 2 === 0) {
            half = range / 2;
            left = s.substring(start, start + half);
            right = s.substring(start + half, start + half * 2);
        } else {
            half = Math.floor(range / 2);
            left = s.substring(start, start + half);
            right = s.substring(start + half + 1, start + half * 2 + 1);
        }

        let flag = true;
        for (let i = 0; i < left.length; i++)
            if (left[i] !== right[right.length - 1 - i]) {
                flag = false;
                break;
            }

        if (flag) {
            let add = left.length + right.length;
            let answer = (range % 2 === 0) ? add : add + 1;
            return answer;
        }
    }
    range--;
}

//let left;
//let right;
//let start = Math.floor(s.length / 2);
//let range = start;
//if (s.length % 2 === 0) {
//    left = s.substring(0, s.length / 2);
//    right = s.substring(s.length / 2).split('').reverse().join('');
//    if (left === right) {
//        console.log(s.length)
//        return s.length;
//    }
//    start = s.length / 2 - 1;
//    range = start;
//}
//
//while (-1 < start) {
//    for (let i = start; i < s.length - range; i++) {
//        let flag = true;
//        left = s.substring(i - range, i);
//        right = s.substring(i + 1, i + 1 + range);
//        console.log(left, right)
//        for (let j = 0; j < left.length; j++)
//            if (left[j] !== right[right.length - 1 - j]) {
//                flag = false;
//                break;
//            }
//
//        if (flag) {
//            console.log(left, right)
//            return left.length + right.length + 1;
//        }
//    }
//    start--;
//    range = start;
//}
