// https://programmers.co.kr/learn/courses/30/lessons/60059?language=javascript

//let key = [
//    [0, 0, 0, 0],
//    [0, 0, 0, 0],
//    [0, 0, 1, 0],
//    [0, 0, 1, 0]
//];

let key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]];
let lock = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];

const rotate = key => {
    let flag = false;
    if (key.length % 2 === 0) flag = true;
    if (flag) {
        key.forEach(k => {
            return k.splice(k.length / 2, 0, 0);
        });
        key.splice(key.length / 2, 0, new Array(key.length + 1).fill(0))
    }

    let tmp = [];
    for (let i = 0; i < key.length; i++) tmp[i] = new Array(key.length).fill(0);

    let move = Math.floor(key.length / 2);

    for (let y = 0; y < key.length; y++) {
        for (let x = 0; x < key.length; x++) {
            if (key[x][y] === 1) {

                let tx = (y - move) + move;
                let ty = ((x - move) * -1) + move;
                tmp[tx][ty] = 1;
            }
        }
    }
    if (flag) {
        tmp.forEach(t => {
            t.splice(Math.floor(t.length / 2), 1);
        });
        tmp.splice(Math.floor(tmp.length / 2), 1);
    }
    return tmp;
}

let open = lock.reduce((acc, cur) => {
    cur.forEach(c => {
        if (c === 0) acc++;
    })
    return acc;
}, 0);

let n = lock.length;

let rs = 0;
let re = 1;
let cs = 0;
let ce = 1;
for (let count = 0; count < 4;) {
    let flag = 0;
    for (let i = rs; i < re; i++) {
        for (let j = cs; j < ce; j++) {
            if (lock[n - 1 - i][n - 1 - j] === 0 && key[i][j] === 1) {
                flag++;
            } else if ((lock[n - 1 - i][n - 1 - j] === 1 && key[i][j] === 1) ||
                (lock[n - 1 - i][n - 1 - j] === 0 && key[i][j] === 0)) break;

        }
        if (flag === open) {
            console.log(count, true);
        }
    }

    if (ce !== n) ce++;
    else if (cs === n) {
        cs = 0;
        ce = 1;
        if (re !== n) re++;
        else if (rs === n) {
            rs = 0;
            re = 1;
            count++;
            key = rotate(key);
        } else if (re === n) rs++;
    } else if (ce === n) cs++;
}

console.log('end')
