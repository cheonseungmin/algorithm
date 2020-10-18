// https://programmers.co.kr/learn/courses/30/lessons/42888

let records = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
];

let result = [
    "Prodo님이 들어왔습니다.",
    "Ryan님이 들어왔습니다.",
    "Prodo님이 나갔습니다.",
    "Prodo님이 들어왔습니다."
];

let chats = [];
let users = {};

records.forEach(record => {
    let s = record.split(' ');
    if (s[0] === 'Enter') {
        users[s[1]] = s[2];
        chats.push(`${s[1]}님이 들어왔습니다.`);
    } else if (s[0] === 'Leave') {
        chats.push(`${s[1]}님이 나갔습니다.`);
    } else {
        users[s[1]] = s[2];
    }
});


chats = chats.map((chat, i) => {
    let j = chat.indexOf('님');
    let s = chat.substring(0, j);
    return users[s] + chat.substring(j, chat.length);
})


console.log(chats);
