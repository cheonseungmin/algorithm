function solution(a) {
    let answer = 0;
    let n = a.length;
    
    const check = (arr) => {
        let tmp = [];
        for(let i = 0; i <= arr.length - 2; i += 2) tmp.push([arr[i], arr[i+1]]);
        if(tmp.every(e => e.includes(tmp[0][0]))
          || tmp.every(e => e.includes(tmp[0][1]))) {
            answer = arr.length;   
        }
    }
    
    const comb = (arr, tmp, r, start) => {
        if (r === 0) {
            check(tmp);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            tmp.push(arr[i]);
            comb(arr, tmp, r - 1, i + 1);
            tmp.pop();
        }
    }
    
    while(n != 0) {
        if(n % 2 === 0) {
            comb(a, [], n, 0);
            if(answer !== 0) break;
        }
        n--;  
    }
    
    return answer;
}