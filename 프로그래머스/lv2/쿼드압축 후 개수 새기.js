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
    for (let k = 0; k < 4; k++) q[k] = new Array(half);


    for (let i = 0; i < half; i++) {
        q[0][i] = new Array(half);
        for (let j = 0; j < half; j++) {
            q[0][i][j] = arr[i][j];
        }
    }

    for (let i = 0; i < half; i++) {
        q[1][i] = new Array(half);
        for (let j = 0; j < half; j++) {
            q[1][i][j] = arr[i][half + j];
        }
    }

    for (let i = 0; i < half; i++) {
        q[2][i] = new Array(half);
        for (let j = 0; j < half; j++) {
            q[2][i][j] = arr[half + i][j];
        }
    }

    for (let i = 0; i < half; i++) {
        q[3][i] = new Array(half);
        for (let j = 0; j < half; j++) {
            q[3][i][j] = arr[half + i][half + j];
        }
    }

    for (let k = 0; k < 4; k++) f(q[k]);
}

f(arr);
console.log(answer);
