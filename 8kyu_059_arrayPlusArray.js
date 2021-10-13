// 문제
// 두 배열의 합을 반환한다.
// 각 배열은 정수만 포함한다.

function arrayPlusArray(arr1, arr2) {
  
  // 풀이1
  return [...arr1, ...arr2].reduce((result, i) => result + i ,0)

  // 풀이2
  const arr = [...arr1, ...arr2]
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
}

arrayPlusArray([1, 2], [3, 4]); // 10
arrayPlusArray([2, 2], [2, 2]); // 8
