// 문제
// 정수만 포함된 두 개의 정렬된 배열이 주어진다.
// 오름차순으로 정렬된 하나의 배열로 병합한다.
// 반환된 결과에서는 중복을 제거한다.

function mergeArrays(arr1, arr2) {

  // 풀이1
  let result = []

  const arr = arr1.concat(arr2)

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }

  return result.sort((a, b) => a - b)

  // 풀이2
  const arr = [...arr1, ...arr2].sort((a, b) => a - b)
  const result = new Set(arr)
  return [...result]
}

mergeArrays([1, 2, 3], [1, 2, 4]); // [1, 2, 3, 4]
mergeArrays([1, 3, 5], [2, 4, 6]); // [1, 2, 3, 4, 5, 6]
mergeArrays([2, 1], [-1, 0, -2]); // [-2, -1, 0, 1, 2]
