//문제: https://programmers.co.kr/learn/courses/30/lessons/42583

let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];

let answer = 0;
let truck_distance = []

let seconds = 1
let kg = 0 // 현재 도로 위의 무게
let i = 0 // 도로 위의 제일 앞선 차량
let j = 0 // 도로 위의 차량 수

while (true) {

    if ((kg + truck_weights[i+j]) <= weight) {
        kg += truck_weights[i+j];
        truck_distance[i+j] = 0;
        j++;
    }

    for (let k = i; k < i+j; k++) truck_distance[k] += 1;
    
    if (truck_distance[i] == bridge_length) {
        kg -= truck_weights[i];
        i++;
        j--;
    }

    seconds++

    if (i == truck_weights.length) break;
}

console.log(seconds);
