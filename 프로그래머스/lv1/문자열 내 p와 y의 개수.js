let s = 'pPoooyY'

s = s.toUpperCase();

let count = [...s].reduce((acc, cur) => {
    if(cur === 'P') acc[0]++;
    if(cur === 'Y') acc[1]++;
    return acc;
}, [0, 0]);

console.log(count)
//if(count[0] === count[1]) return true;
//else return false;