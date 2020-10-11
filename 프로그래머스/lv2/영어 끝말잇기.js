let n = 3;

let words = ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'];

//let words = ["hello", "one", "even", "never", "now", "world", "draw"];

let stack = [];
let people = 0;
let turn = 0;

stack.push(words[0]);
for (let i = 1; i < words.length; i++) {
    if (stack.includes(words[i])) {
        people = ((i + 1) % n === 0) ? n : (i + 1) % n;
        turn = Number.parseInt((i + n) / n);
        break;
    } else {
        let pre = stack[stack.length-1];
        if(pre[pre.length-1] === words[i][0]) {
            stack.push(words[i]);
        } else {
            people = ((i + 1) % n === 0) ? n : (i + 1) % n;
            turn = Number.parseInt((i + n) / n);
            break;
        }
    }
}

console.log([people, turn])
