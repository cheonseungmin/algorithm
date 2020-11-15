// https://programmers.co.kr/learn/courses/30/lessons/68936?language=javascript

let arr = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1]
]

let answer = [0, 0];

const f = (arr) => {
    if (arr.every(row => row.every(col => col === 0))) {
        answer[0]++;
        return;
    } else if (arr.every(row => row.every(col => col === 1))) {
        answer[1]++;
        return;
    }

    let half = arr.length / 2;
    let q = new Array(4);
    for (let k = 0; k < 4; k++) {
        q[k] = new Array(half);
        for (let i = 0; i < half; i++) {
            q[k][i] = new Array(half);
            for (let j = 0; j < half; j++) {
                if (k === 0) q[k][i][j] = arr[i][j];
                else if (k === 1) q[k][i][j] = arr[i][half + j];
                else if (k === 2) q[k][i][j] = arr[half + i][j];
                else q[k][i][j] = arr[half + i][half + j];
            }
        }
        f(q[k]);
    }
}

f(arr);
console.log(answer);
