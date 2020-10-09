let N = 6;

let battery = 0;

while(0 < N) {
    if(N % 2 === 0) {
        N /= 2;
    } else {
        N--;
        battery++;
    }
}

console.log(battery)