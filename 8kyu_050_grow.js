// 문제
// 주어진 정수 배열의 각 값을 차례로 곱해서 반환한다.

function grow(arr) {

  // 풀이1
  let result = arr[0]

  for (let i = 1; i < arr.length; i++) {
    result *= arr[i]
  }

  return result

  // 풀이2
  return arr.reduce((result, i) => result * i , 1)
}

grow([1, 2, 3, 4]); // 24
grow([2, 2, 2, 2]); // 16
