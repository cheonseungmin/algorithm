// https://programmers.co.kr/learn/courses/30/lessons/43164?language=javascript

let tickets = [
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"]
];

let answer = [];

const f = (t, start, p) => {
    if (t.length === 0) {
        answer.push([...p]);
        return;
    }

    let sarr = [];
    t.forEach(e => {
        if (start === e[0]) sarr.push(e);
    });
    if (sarr.length === 0) return;

    sarr.sort((a, b) => {
        if (a[1] < b[1]) return -1;
        else return 1;
    });

    let next = sarr[0];
    for (let i = 0; i < sarr.length; i++) {
        let next = sarr[i];

        for (let j = 0; j < t.length; j++) {
            if (t[j][0] === next[0] &&
                t[j][1] === next[1]) {
                let tmp = t.splice(j, 1)[0]
                p.push(tmp[1]);
                f(t, next[1], p);
                t.splice(j, 0, tmp);
                p.pop();
            }
        }
    }
}

f(tickets, 'ICN', ['ICN']);

console.log(answer[0]);
