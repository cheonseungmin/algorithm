let gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];
//let gems = ['DIA', 'EM', 'EM', 'RUB', 'DIA'];

let numberOfGems = new Set(gems).size;

let currentGems = new Map();

let start = 0;
let end = 0;

let min = Number.MAX_VALUE;
let answer;

while (end < gems.length) {
    while (true) {
        currentGems.set(gems[end], (currentGems.get(gems[end]) || 0) + 1);
        end++;
        if (currentGems.size === numberOfGems) break;
    }
    while (true) {
        currentGems.set(gems[start], currentGems.get(gems[start]) - 1);
        if (currentGems.get(gems[start]) === 0) {
            currentGems.set(gems[start], currentGems.get(gems[start]) + 1);
            if (end - start < min) {
                min = end - start;
                answer = [start + 1, end];
            }
            break;
        } else start++;
    }
}

console.log(answer);
