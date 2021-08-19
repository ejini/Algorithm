// 문제
// 정수 배열에서 가장 큰 숫자를 반환한다.

function max(arr) {

  // 풀이1
  let max = arr[0]

  for (let i = 0; i < arr.length; i++) {
    arr[i] > max ? max = arr[i] : max
  }

  return max
  
  // 풀이2
  return Math.max(...arr);

  // 풀이3
  return Math.max.apply(null, arr)

  // 풀이4
  return arr.reduce((a, b) => a < b ? b : a, arr[0])

  // 풀이5
  return arr.sort((a, b) => b - a).slice(0, 1)[0]

  // 풀이6
  return arr.sort((a, b) => b - a)[0]

  // 풀이7
  return arr.sort((a, b) => a - b)[arr.length - 1]
}

max([1, 2, 3, 4]); // 4
max([3, 1, 4, 2]); // 4
max([-3, -1, 0, 1]); // 1
