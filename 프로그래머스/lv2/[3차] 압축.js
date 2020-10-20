// https://programmers.co.kr/learn/courses/30/lessons/17684

//let msg = 	"KAKAO";

let msg = "TOBEORNOTTOBEORTOBEORNOT"

let dict = [];

for(let i=0; i<26; i++) dict.push(String.fromCharCode(65 + i))

let answer = [];

while(0 < msg.length) {
    console.log(msg)
    for(let i = dict.length-1; 0 <= i; i--) {
        let j = msg.indexOf(dict[i]);
        
        if(j === 0) {
            answer.push(i+1);
            dict.push(dict[i] + msg.substring(j+dict[i].length, j+dict[i].length + 1));
            msg = msg.substring(dict[i].length);
            break;
        }
    }
}

console.log(dict);
console.log(answer)