let ops = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"];

let queue = ops.reduce((acc, op) => {
    if (op[0] === 'I') {
        let n = Number(op.split(' ')[1]);
        acc.push(n);
    } else if (op[2] === '-') {
        acc.sort((a, b) => b - a);
        acc.pop();
    } else {
        acc.sort((a, b) => a - b);
        acc.pop();
    }

    return acc;
}, []).sort((a, b) => b - a);

let answer = (queue.length === 0)? [0, 0]: [queue[0], queue[queue.length - 1]];

console.log(answer)
