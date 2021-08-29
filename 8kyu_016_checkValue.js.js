// 문제
// 배열과 값이 주어진다.
// 제공된 배열에 값이 있는지 확인한다.
// 배열에 값이 포함되어 있으면 ‘true’를 반환하고, 그렇지 않으면 ‘false’를 반환한다.

function checkValue(arr, val) {
  
  // 풀이1
  let flag = false

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
          flag = true;
          break;
      } else {
          flag = false;
      }
      
  }
  
  return flag

  // 풀이2
  return arr.indexOf(val) < 0 ? false : true

  // 풀이3
  return arr.indexOf(val) !== -1 ? true : false

  // 풀이4
  return arr.filter(i => i === val).length ? true : false

  // 풀이5
  return arr.includes(val)

  // 풀이6
  return arr.find(i => i === val) === undefined ? false : true
}

checkValue([1, 2, 3, 4], 4); // true
checkValue([1, 2, 3, 4], 8); // false
checkValue(['a', 'b'], 'a'); // true
checkValue(['a', 'b'], 'i'); // false
checkValue(['apple', 'banana'], 'tomato'); // false