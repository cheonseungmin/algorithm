// https://programmers.co.kr/learn/courses/30/lessons/17686#qna

let files = [
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
    "abc123"
];


files.sort((a, b) => {
    let aHead;
    let aNumber;
    let aTail;
    for (let i = 0; i < a.length; i++) {
        if ('0' <= a[i] && a[i] <= '9') {
            for (let j = i; j <= a.length; j++) {
                if (a[j] < '0' || '9' < a[j] || j === a.length) {
                    aHead = a.substring(0, i);
                    aNumber = a.substring(i, j);
                    aTail = a.substr(j);
                    break;
                }
            }
            break;
        }
    }

    let bHead;
    let bNumber;
    let bTail;
    for (let i = 0; b.length; i++) {
        if ('0' <= b[i] && b[i] <= '9') {
            for (let j = i; j <= b.length; j++) {
                if (b[j] < '0' || '9' < b[j] || j === b.length) {
                    bHead = b.substring(0, i);
                    bNumber = b.substring(i, j);
                    bTail = b.substr(j);
                    break;
                }
            }
            break;
        }
    }

    aHead = aHead.toUpperCase();
    bHead = bHead.toUpperCase();

    if (aHead < bHead) {
        return -1
    } else if (bHead < aHead) {
        return 1
    } else {
        let an = Number(aNumber);
        let bn = Number(bNumber);

        if (an < bn) {
            return -1;
        } else {
            return 1;
        }
    }
});

console.log(files)
