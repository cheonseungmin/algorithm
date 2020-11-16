// https://programmers.co.kr/learn/courses/30/lessons/43105?language=javascript

let t = [
    [7],
    [3, 8],
    [8, 1, 0],
    [2, 7, 4, 4],
    [4, 5, 2, 6, 5]
]

for (let i = 1; i < t.length; i++) {
    for (let j = 0; j < t[i].length; j++) {
        let left = (j === 0)? Number.MIN_VALUE: t[i-1][j-1] + t[i][j];
        let right = (j === t[i].length - 1)? Number.MIN_VALUE: t[i-1][j] + t[i][j];
        
        t[i][j] = (left > right)? left: right;
    }
}

let answer = Math.max(...t[t.length - 1])
console.log(answer)
