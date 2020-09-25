let arr = Array.from('ABC');

const permutation = (ansArr, keyArr, r) => {
  if(r === 0) {
    console.log(ansArr);
    return;
  }
  
  keyArr.forEach((element, key) => {
    let tempKeyArr = keyArr.slice(0, key).concat(keyArr.slice(key+1, keyArr.length));
    ansArr.push(element);
    r -= 1;
    permutation(ansArr, tempKeyArr, r);
    ansArr.pop();
    r += 1;
  });
}

permutation([], arr, arr.length);