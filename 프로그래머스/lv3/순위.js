// https://programmers.co.kr/learn/courses/30/lessons/49191?language=javascript

let n = 5;
let results = [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5]
];

function solution(n, results) {
    // 플로이드 - 와샬 알고리즘

    // 모든 선수의 승패를 기록하는 배열
    // a[i][j] : i 선수와 j 선수의 실력차
    // null : 알 수 없음

    const a = [];
    for (let i = 0; i < n; i++) {
        a[i] = [];
        for (let j = 0; j < n; j++) {
            a[i][j] = null;
        }
    }

    // results의 내용 반영
    // a[i][j] === true : i 선수가 j 선수보다 강함
    results.forEach(
        v => {
            a[v[0] - 1][v[1] - 1] = true;
        }
    );

    //console.log(1, JSON.parse(JSON.stringify(a)));

    // 추정 시작
    // 0 ~ n-1인 k 선수에 대해,
    // i가 k보다 강하고 k가 j보다 강하다면
    // i가 j보다 강함

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {

                a[i][j] = a[i][j] || (a[i][k] && a[k][j]);
            }
        }
    }

    //console.log(2, JSON.parse(JSON.stringify(a)));

    let answer = n;

    // 순위를 가늠할 수 없는 선수의 수를 줄여나간다
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                continue;
            }

            // i와 j선수의 차이를 알 수 없다면 감소
            if (a[i][j] === null && a[j][i] === null) {
                answer--;
                break;
            }
        }
    }

    return answer;
}

//let n = 8;
//let results = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8]]

//let table = [];
//for (let i = 0; i < n; i++) table[i] = new Array(n).fill(0);
//
//results.forEach(result => {
//    table[result[0] - 1][result[1] - 1] = 1;
//    table[result[1] - 1][result[0] - 1] = -1;
//});
//
//
//let winQueue = [0, 1, 2, 3, 4];
////for (let i = 0; i < n; i++) winQueue.push(i)
//
//while (winQueue.length !== 0) {
//    let now = winQueue.shift();
//    let tmp = [];
//    table[now].forEach((fight, next) => {
//        if (fight === 1) {
//            winQueue.push(next);
//            tmp.push(next);
//        }
//    });
//
//    tmp.forEach(next => {
//        for (let i = 0; i < n; i++)
//            if (table[next][i] === 1) table[now][i] = 1;
//    });
//}
//
//
//let loseQueue = [0, 1, 2, 3, 4];
////for (let i = 0; i < n; i++) loseQueue.push(i);
//
//while (loseQueue.length !== 0) {
//    let now = loseQueue.shift();
//    let tmp = [];
//    table[now].forEach((fight, next) => {
//        if (fight === -1) {
//            loseQueue.push(next);
//            tmp.push(next)
//        }
//    });
//
//    tmp.forEach(next => {
//        for (let i = 0; i < n; i++)
//            if (table[next][i] === -1) table[now][i] = -1;
//    });
//}
//
//let answer = table.filter(t1 => t1.filter(t2 => t2 === 0).length === 1).length;
//console.log(answer)
//console.log(table)



//let check = new Array(n).fill(false);
//let ranking = new Array(n + 1).fill(n);
//
//const f = (result, checkIdx) => {
//    let [start, end] = result;
//    for (let i = 0; i < results.length; i++) {
//        if (results[i][0] === end) {
//            f(results[i], i);
//        }
//    }
//    
//    ranking[start] = ranking[end] - 1;
//}
//
//for(let i = 0; i<results.length; i++) {
//    if(!check[i]) f(results[i], i);
//}
//
//ranking.shift();
//let answer = ranking.filter(e => ranking.filter(tmp => e === tmp ).length < 2).length;
//console.log(answer)
