// 문제
// 주어진 배열의 각 값이 두 배로 된 새 배열을 반환한다.

function maps(arr) {

  // 풀이1
  let result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2)
  }

  return result

  // 풀이2
  return arr.map(i => i * 2)
}

maps([1, 2, 3, 4]); // [2, 4, 6, 8]
maps([2, 2, 2, 2]); // [4, 4, 4, 4]
