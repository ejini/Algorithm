// 문제
// 배열의 element를 하나 걸러 제거한다.
// 항상 첫 번째 element는 유지하고, 그 다음 element부터 제거한다.

function removeEveryOther(arr) {

  // 풀이1
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 ) result.push(arr[i])
  }

  return result

  // 풀이2
  let result = []

  for (let i = 0; i < arr.length; i+=2) {
    result.push(arr[i])
  }

  return result

  // 풀이3
  let flag = true

  const result = []

  arr.forEach(i => {
    if (flag) {
      result.push(i)
      flag = !flag
    } else {
      flag = !flag
    }
  });

  return result
}

removeEveryOther([1, 2, 3, 4]); // [1, 3]
removeEveryOther(['a', 'b', 'c', 'd']); // ['a', 'c']
