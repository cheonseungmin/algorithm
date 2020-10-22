// https://programmers.co.kr/learn/courses/30/lessons/68935?language=javascript

let n = 125;

const f1 = (n) => {
    if (n < 3) return '' + n;
    return  f1(Math.floor(n / 3)) + (n % 3);
}


const f2 = (s) => {
    let sum = 0;
    for(let i=s.length-1; 0 <= i; i--) {
        sum += Number(s[i]) * (3 ** ((s.length - 1 - i)));
    }
    
    return sum;
}


console.log(f2([...f1(45)].reverse().join('')));