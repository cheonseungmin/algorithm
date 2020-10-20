// https://programmers.co.kr/learn/courses/30/lessons/17683?language=javascript
//let m = "ABCDEFG";
//
//let musicinfos = [
//    "12:00,12:14,HELLO,CDEFGAB",
//    "13:00,13:05,WORLD,ABCDEF"
//];

//let m = "CC#BCC#BCC#BCC#B"
//
//let musicinfos = ["23:00,00:00,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]

let m = "E"
let musicinfos = ["23:00,24:00,FOO,EE#", "04:00,04:08,BAR,EEE"]

//let m = 'E#'
//let musicinfos = ['13:00,13:02,HAPPY,EE#']

let mArr = [];
    [...m].forEach(c => {
    if (c === '#') mArr.push(mArr.pop() + c);
    else mArr.push(c);
});

const check = (play) => {
    for (let i = 0; i < play.length; i++) {
        if (play[i] === mArr[0]) {
            let flag = true;
            for (let j = 0; j < mArr.length; j++) {
                if (play[i + j] !== mArr[j]) flag = false;
            }
            if (flag) return true;
        }
    }
    return false;
}

let playedMusic = [['(None)', 0]];

musicinfos.forEach(music => {
    let [start, end, name, code] = music.split(',');
    
    let startTime = new Date();
    let [startHour, startMinute] = start.split(':');
    startTime.setHours(Number(startHour));
    startTime.setMinutes(Number(startMinute));
    startTime.setSeconds(0);

    let endTime = new Date();
    let [endHour, endMinute] = end.split(':');
    endTime.setHours(Number(endHour));
    endTime.setMinutes(Number(endMinute));
    endTime.setSeconds(0);

    let playedTime = parseInt((Math.abs(endTime - startTime)) / 1000 / 60);
    let minutes = 0;
    let i = 0;
    let play = [];

    while (minutes < playedTime) {
        play.push(code[i]);
        i = (i + 1 < code.length) ? i + 1 : 0;
        if (code[i] === '#') {
            play.push(play.pop() + '#');
            i = (i + 1 < code.length) ? i + 1 : 0;
        }
        minutes++;
    }

    if (check(play)) playedMusic.push([name, playedTime]);
});

if (1 < playedMusic.length) {
    let max = [playedMusic[0][0], playedMusic[0][1]];
    playedMusic.forEach(p => {
        if (max[1] < p[1]) max = [p[0], p[1]];
    });
    let count = playedMusic.reduce((acc, p) => {
        if (p[1] === max[1]) acc++;
        return acc;
    }, 0);

    if (count !== 1) {
        for (let i = 0; i < playedMusic.length; i++) {
            if (playedMusic[i][1] === max[1]) console.log(playedMusic[i][0]);
        }
    } else {
        console.log(max[0]);
    }
} else {
    console.log(playedMusic[0][0]);
}
