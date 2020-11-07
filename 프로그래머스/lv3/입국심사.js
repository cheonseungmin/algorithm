//let n = 6;
//let times = [7, 10];
//
//times.sort((a, b) => a - b);
//
//let cur = new Array(times.length).fill(0);
//for (let i = 1; i <= n; i++) {
//    let tmp = cur.slice();
//
//    for (let j = 0; j < tmp.length; j++) tmp[j] += times[j];
//    let min = tmp[0];
//    let minidx = 0;
//    for (let j = 1; j < tmp.length; j++) {
//        if(tmp[j] < min) {
//            min = tmp[j];
//            minidx = j;
//        }
//    }
//    cur[minidx] += times[minidx];
//}
//
//let answer = cur.sort((a, b) => a - b).pop();
//
//console.log(answer)


function solution(n, times) {
    times.sort((a, b) => a - b);

    // 시간의 최솟값, 최댓값 구하기
    let low = 0;
    let high = times[length - 1] * n;
    let mid = Math.floor((low + high) / 2);
    let count = 0;

    // 이진탐색
    while (low <= high) {
        // mid값으로 최대 몇 명까지 탐색가능한지 구하기
        for (let time of times) {
            count += Math.floor(mid / time);
        }

        // 그 수가 n보다 크거나 같으면 high는 mid-1
        // n이랑 같아도 mid-1을 해줘야 한다. n명측정할 수 있는 경우의 수가 1가지가 아니기 때문.
        if (count >= n) {
            high = mid - 1;
        }
        // 그 수가 n보다 작으면 low는 mid+1.
        else if (count < n) {
            low = mid + 1;
        }
        count = 0;
        mid = Math.floor((low + high) / 2);
    }

    // 해가 될수 있는 후보 low에 대하여 n명을 측정할 수 있는지 테스트
    for (let time of times) {
        count += Math.floor(low / time);
    }
    return answer;
}
