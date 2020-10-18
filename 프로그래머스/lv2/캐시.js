// https://programmers.co.kr/learn/courses/30/lessons/17680

let cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];

let cacheSize = 3;

cities = cities.map(e => e.toUpperCase());

let time = 0;

let answer = cities.reduce((cache, city, date) => {
    if (cacheSize === 0) {
        time += 5;
    } else if (cache.some(cur => cur[0] === city)) {
        let idx = cache.findIndex(cur => cur[0] === city);
        cache[idx] = [cache[idx][0], date];
        time += 1;
    } else if (cache.length < cacheSize) {
        cache.push([city, date]);
        time += 5;
    } else {
        let minIdx = cache.reduce((min, cur, idx) => {
            if (cur[1] < min[0]) return [cur[1], idx];
            return min;
        }, [cache[0][1], 0])[1];

        cache.splice(minIdx, 1, [city, date]);
        time += 5;
    }

    return cache;
}, []);


console.log('answer:' + time);
