// 문제출처: https://programmers.co.kr/learn/courses/30/lessons/49993?language=javascript#fn1

let skill = 'CBD'

let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]

let answer = 0

let skillLevels = {}

Array.from(skill).forEach((s, i) => {
  skillLevels[s] = i
})

skill_trees.forEach((skillTree) => {
  let passingArr = Array.from(skillTree).filter((s) => {
    return Array.from(skill).includes(s)
  })
  
  let level = -1
  let check = passingArr.every((element) => {
    if(skillLevels[element] - level === 1) {
      level = skillLevels[element]
      return true
    }
    else return false
  })
  
  if(check) answer += 1
})

console.log(answer)
 