// https://programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

// let nums = [3, 1, 2, 3];
let nums = [3, 3, 3, 2, 2, 4];
// let checks = Array(nums.length).fill(false);
// let max = 0;

// const recursion = (start, r) => {
//   if (r === 0) {
//     let answer = checks
//       .map((e, i) => {
//         if (e === true) return nums[i];
//       })
//       .filter((e) => e)
//       .reduce((acc, cur) => {
//         if (!acc.includes(cur)) acc.push(cur);
//         return acc;
//       }, []);

//     if (max < answer.length) max = answer.length;
//     return;
//   }

//   for (let i = start; i < nums.length; i++) {
//     checks[i] = true;
//     if(i + r <= i + nums.length/2) recursion(i + 1, r - 1);
//     checks[i] = false;
//   }
// };

// recursion(0, nums.length / 2);

// console.log(max);

function solution(nums) {
    const noDuplicatePokemon = new Set(nums);
    const pokemonVarietyCount = noDuplicatePokemon.size;
    const pokemonCounts = nums.length;
    return pokemonVarietyCount > pokemonCounts/2 ? pokemonCounts/2 : pokemonVarietyCount;
}