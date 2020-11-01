let arr = [5, 9, 7, 10]
let divisor = 5

let answer = arr.filter(a => a % divisor === 0);

if (answer.length === 0) return -1;
else {
    answer.sort((a, b) => b - a);
    return answer.length;
}
