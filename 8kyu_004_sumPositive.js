// 문제
// 모든 양수의 합을 반환한다.

function sumPositive(arr) {

  // 풀이1
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) result += arr[i]
  }

  return result

  // 풀이2
  return arr.filter(i => i > 0).reduce((result, i) => result + i, 0)

  // 풀이3
  return arr.reduce((result, i) => i > 0 ? result + i : result, 0)

}

sumPositive([]); // 0
sumPositive([0]); // 0
sumPositive([1, 2, 3, 4, 5]); // 15
sumPositive([-1, -2, -3, -4]); // 0
sumPositive([-1, 0, 1, 2]); // 3

// reduce(): 콜백의 반환값을 누적시키면서 하나의 결과값을 반환한다.