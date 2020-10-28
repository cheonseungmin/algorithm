// https://programmers.co.kr/learn/courses/30/lessons/43163?language=javascript

// hit

// hot

// dot lot

// dog log

// cog

let begin = "hit";
let target = "cog";
//let words = ["hot", "dot", "dog", "lot", "log", "cog"];
let words = ["hot", "dot", "dog", "lot", "log"];

let answer;

const check = (s1, s2) => {
    let count = 0;
    for(let i=0; i<s1.length; i++) if(s1[i] === s2[i]) count++;
    if(count === s1.length - 1) return true;
    else return false;
}

const dfs = (b, w, count) => {
     if (b === target) {
         if(answer === undefined) answer = count;
         else if(count < answer) answer = count;
         return;
     }

     for (let i = 0; i < w.length; i++) {
         if(check(b, w[i])) {
             let tmp = w.splice(i, 1)[0];
             console.log(b, tmp)
             dfs(tmp, w, count + 1);
             w.splice(i, 0, tmp);
         }
         console.log(' ')
     }
 }

dfs(begin, words, 0);
if(answer === undefined) answer = 0;
console.log(answer)