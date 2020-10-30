let routes = [[-20, 15], [-14, -5], [-18, -13], [-5, -3], [100, 1001]];

routes = routes.map(r => [Math.min(r[0], r[1]), Math.max(r[0], r[1])]);
routes.sort((a, b) => a[0] - b[0]);

console.log(routes)


let arr = [[-30000, 30000]];

const check = (a1, a2) => {
    if (a1[0] < a2[0]) {
        if (a1[1] < a2[0]) return false;
        else return true;
    } else return true;
}

let answer = routes.reduce((count, route) => {
    for (let i = arr.length - 1; 0 <= i; i--) {
        if (!check(arr[i], route)) {
            arr = [route];
            count++;
            return count;
        }
    }
    
    arr.push(route);
    return count;
}, 1);

console.log(answer)
