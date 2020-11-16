// https://programmers.co.kr/learn/courses/30/lessons/70129?language=javascript

let s = "110010101001";

let answer = [0, 0];

while (s !== '1') {
    answer[0]++;
    let arr = s.split('');
    answer[1] += arr.filter(e => e === '0').length;
    let count = arr.filter(e => e !== '0').length;
    s = count.toString(2);
}

console.log(answer)
