let nums = [1,2,3,4];

let sorted = nums.sort((a, b) => a - b);
let mySet = new Set();

const check = (n) => {
    let count = 0;
    for(let i=1; i<=n/2; i++) {
        if(n % i === 0) count++;
        if(1 < count) break;
    }
    if(n === 1) return false;
    else if(1 < count) return false;
    else return true;
}

for(let i=0; i<sorted.length; i++) {
    for(let j=i+1; j<sorted.length; j++) {
        for(let k=j+1; k<sorted.length; k++) {
            let sum = sorted[i] + sorted[j] + sorted[k];
            if(check(sum)) mySet.add(sum);
        }
    }
}

let answer = mySet.size;

console.log(check(105))