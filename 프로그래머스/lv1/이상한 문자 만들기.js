function solution(s) {
    let ss = s.split(' ');
    var answer = '';
    ss.forEach(e => {
        for (let i = 0; i < e.length; i++) {
            if (i % 2 === 0) {
                if ('a' <= e[i] && e[i] <= 'z') {
                    answer += String.fromCharCode(e[i].charCodeAt() - 32);
                } else {
                    answer += e[i]
                }
            } else {
                if ('A' <= e[i] && e[i] <= 'Z') {
                    answer += String.fromCharCode(e[i].charCodeAt() + 32);
                } else {
                    answer += e[i]
                }
            }
        }
        answer += ' ';
    });
    return answer.substring(0, answer.length - 1);
}
