// https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript

let dartResult = "1D2S#10S";

let stack = [];

let i = 0;
while (i < dartResult.length) {
    let tmp = dartResult[i];

    if (tmp === 'S') {

    } else if (tmp === 'D') {
        stack.push(stack.pop() ** 2);
    } else if (tmp === 'T') {
        stack.push(stack.pop() ** 3);
    } else if (tmp === '*') {
        let t2 = stack.pop();
        let t1 = stack.pop();

        if (t1) stack.push(t1 * 2);
        stack.push(t2 * 2);
    } else if (tmp === '#') {
        let t1 = stack.pop();

        if (t1) stack.push(t1 * -1);
    } else {
        tmp = '';
        while ('0' <= dartResult[i] && dartResult[i] <= '9') {
            tmp += dartResult[i++];
        }
        i--;
        stack.push(Number(tmp));
    }
    
    i++;
}

let answer = stack.reduce((acc, cur) => {
    acc += cur;
    return acc;
}, 0);

console.log(answer);
