let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
let hand = "right"

let leftNumbers = [0, 3, 6];
let rightNumbers = [2, 5, 8];

let leftHand = 9; // 3번째 줄
let rightHand = 11;
let answer = numbers.map(n => n - 1).reduce((acc, number) => {
    if (leftNumbers.includes(number)) {
        leftHand = number;
        acc += 'L';
    } else if (rightNumbers.includes(number)) {
        rightHand = number;
        acc += 'R'
    } else {
        if (number === -1) number = 10;
        let l = Math.abs(Math.floor(number / 3) - Math.floor(leftHand / 3));
        if ((leftHand % 3) !== 1) l++;
        let r = Math.abs(Math.floor(number / 3) - Math.floor(rightHand / 3));
        if ((rightHand % 3) !== 1) r++;

        if (l < r) {
            leftHand = number;
            acc += 'L';
        } else if (r < l) {
            rightHand = number;
            acc += 'R';
        } else {
            if (hand === 'left') {
                leftHand = number;
                acc += 'L';
            } else {
                rightHand = number;
                acc += 'R';
            }
        }
    }

    return acc;
}, '');

console.log(answer)
