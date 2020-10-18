// https://programmers.co.kr/learn/courses/30/lessons/42890?language=javascript

//let relation = [
//    ["100", "ryan", "music", "2"],
//    ["200", "apeach", "math", "2"],
//    ["300", "tube", "computer", "3"],
//    ["400", "con", "computer", "4"],
//    ["500", "muzi", "music", "3"],
//    ["600", "apeach", "music", "2"]
//];

let relation = [
    ['b', '2', 'a', 'a', 'b'],
    ['b', '2', '7', '1', 'b'],
    ['1', '0', 'a', 'a', '8'],
    ['7', '5', 'a', 'a', '9'],
    ['3', '0', 'a', 'f', '9']
]

//let relation = [
//    ['a', '1', '2'],
//    ['5', '1', '5'],
//    ['a', '2', '4']
//]

let columns = relation[0].length;

let propArr = Array(columns).fill(false);
let checkArr = Array(columns).fill(false);

let keys = [];

const comb = (start, r) => {
    if (r === 0) {
        checkKey();
        return;
    }

    for (let i = start; i < columns; i++) {
        checkArr[i] = true;

        comb(i + 1, r - 1);

        checkArr[i] = false;
    }

}


const checkKey = () => {
    let tuples = relation.map(r => {
        return r.reduce((acc, cur, i) => {
            if (checkArr[i] === true) acc += '+' + cur;
            return acc;
        }, '');
    });

    let countArr = tuples.map(tuple => {
        return tuples.filter(t => t === tuple).length;
    });

    if (countArr.every(e => e === 1)) {
        let key = checkArr.reduce((acc, check, i) => {
            if (check === true) acc.push(i);
            return acc;
        }, []);

        if (keys.length === 0) {
            keys.push(key)
        } else {
            let flag = true;
            for (let i = 0; i < keys.length; i++) {
                let count = 0;
                for (let j = 0; j < keys[i].length; j++) {
                    if (key.includes(keys[i][j])) count++;
                }
                if (count === keys[i].length) flag = false;
            }
            if (flag) keys.push(key);
        }
    }
}

for (let i = 1; i <= columns; i++) comb(0, i);

console.log(keys)
console.log(keys.length)
