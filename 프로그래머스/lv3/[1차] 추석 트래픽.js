// https://programmers.co.kr/learn/courses/30/lessons/17676

let lines = [
    '2016-09-15 20:59:57.421 0.351s',
    '2016-09-15 20:59:58.233 1.181s',
    '2016-09-15 20:59:58.299 0.8s',
    '2016-09-15 20:59:58.688 1.041s',
    '2016-09-15 20:59:59.591 1.412s',
    '2016-09-15 21:00:00.464 1.466s',
    '2016-09-15 21:00:00.741 1.581s',
    '2016-09-15 21:00:00.748 2.31s',
    '2016-09-15 21:00:00.966 0.381s',
    '2016-09-15 21:00:02.066 2.62s'
];

let start = [];
let end = [];

lines
    .forEach(line => {
        let date = new Date(line.substring(0, 23)).getTime();
        end.push(date);
        let time = Number(line.substring(24, line.length - 1)) * 1000;
        start.push(date - time + 2);
    });

let max = 1;
let tmp = 0;

start.forEach((s, sIdx) => {
    tmp = tmp < s? s: tmp;
    for (let i = tmp-1; i <= end[sIdx]; i++) {
        let count = 0;

        for (let j = 0; j < start.length; j++) {
            if (i <= start[j]) {
                if (start[j] <= i + 1000) count++;
            } else if (i <= end[j]) {
                count++;
            }
        }

        if (max < count) max = count;
    }
    tmp = end[sIdx];
});

console.log(max)