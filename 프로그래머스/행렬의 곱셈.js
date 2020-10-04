let arr1 = [
    [1, 4], 
    [3, 2], 
    [4, 1]
];

let arr2 = [
    [3, 3], 
    [3, 3]
];

let answer = Array(arr1.length).fill(0);
answer = answer.map(e => Array(arr2.length).fill(0));

for(let i=0; i<arr1.length; i++) {
    for(let k=0; k<arr1[0].length; k++) {
        for(let j=0; j<arr2[0].length; j++) answer[i][j] += arr1[i][k] * arr2[k][j];
    }
}

console.log(answer)