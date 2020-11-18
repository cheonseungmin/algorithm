let n = 10;
let money = [1, 2, 5];

money.sort((a, b) => a - b);

let ns = [n];
let count = 0;

console.log(ns)
while (money.length !== 0) {
    let tmp = [];
    let m = money.pop();
    ns.forEach(e => {
        for (let i = 1; i <= e / m; i++) tmp.push(m);
        if (e % m !== 0) tmp.push(e % m);
        if (e !== m) count++;

    });
    ns = tmp;
    console.log(ns)
    console.log('count', count)
}
count++;
console.log(count)
