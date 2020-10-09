// https://programmers.co.kr/learn/courses/30/lessons/42586

let progresses = [93, 30, 55];

let speeds = [1, 30, 5];

let answer = [];

let dates = progresses.map((el, idx) => {
  return Math.ceil((100 - el) / speeds[idx]);
});

dates.push(100);

dates.reduce((acc, cur, idx) => {
  if (idx === 0) {
    return {
      date: cur,
      count: 1,
    };
  }

  if (acc.date >= cur) {
    return {
      date: acc.date,
      count: acc.count + 1,
    };
  } else {
    answer.push(acc.count);
    return {
      date: cur,
      count: 1,
    };
  }
}, {});

console.log(answer);
