// 문제
// 배열에서 연속되지 않는 첫 번째 element를 반환한다.
// 배열 전체가 연속되는 경우 null을 반환한다.

function firstNonConsecutive(arr) {

  // 풀이1
  let initNum = arr[0]

  for (let i = 1; i <= arr.length; i++) {
    if (initNum + 1 === arr[i]) {
      initNum = arr[i]
    } else {
      if (arr[i] === undefined) return null

      initNum = arr[i]
      return initNum
    }
  }

  // 풀이2
  let current = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - current !== 1) {
      return arr[i]
    } else {
      current = arr[i]
    }
  }

  return null
}

firstNonConsecutive([1, 2, 3, 4]); // null
firstNonConsecutive([1, 2, 3, 8]); // 8
firstNonConsecutive([6, 7, 8, 1]); // 1
