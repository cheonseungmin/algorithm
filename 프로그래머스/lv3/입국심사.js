let n = 6;
let times = [7, 10];

times.sort((a, b) => a - b);

let cur = new Array(times.length).fill(0);
for (let i = 1; i <= n; i++) {
    let tmp = cur.slice();

    for (let j = 0; j < tmp.length; j++) tmp[j] += times[j];
    let min = tmp[0];
    let minidx = 0;
    for (let j = 1; j < tmp.length; j++) {
        if(tmp[j] < min) {
            min = tmp[j];
            minidx = j;
        }
    }
    cur[minidx] += times[minidx];
}

let answer = cur.sort((a, b) => a - b).pop();

console.log(answer)
