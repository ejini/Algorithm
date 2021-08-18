// 문제
// 정수 배열에서 가장 작은 숫자를 반환한다.

function min(arr) {

  // 풀이1
  let min = arr[0]

  for (let i = 0; i < arr.length; i++) {
    arr[i] < min ? min = arr[i] : min
  }

  return min
  
  // 풀이2
  return Math.min(...arr);

  // 풀이3
  return Math.min.apply(null, arr)
  
  // 풀이4
  return arr.reduce((a, b) => a < b ? a : b, arr[0])

  // 풀이5
  return arr.sort((a, b) => a - b).slice(0, 1)[0]

  // 풀이6
  return arr.sort((a, b) => a - b)[0]

  // 풀이7
  return arr.sort((a, b) => b - a)[arr.length - 1]
}

min([1, 2, 3, 4]); // 1
min([3, 1, 4, 2]); // 1
min([-2, -1, 0, 1]); // -2
