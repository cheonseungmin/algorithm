let answer = '';
let n = 1;
for (let i = 0; i < s.length; i++) {
    if ('A' <= s[i] && s[i] <= 'Z') {
        let tmp = s.charCodeAt(i);
        tmp += n;
        if (65 + 26 < tmp) tmp = tmp - 26;
        answer += String.fromCharCode(tmp);
    } else if ('a' <= s[i] && s[i] <= 'z') {
        let tmp = s.charCodeAt(i);
        tmp += n;
        if (97 + 26 < tmp) tmp = tmp - 26;
        answer += String.fromCharCode(tmp);
    } else {
        answer += s[i];
    }
}
