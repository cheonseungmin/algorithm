var answer = s.split('').sort((a, b) => {
    if (a < b) return 11;
    else return -1;
}).join('');

