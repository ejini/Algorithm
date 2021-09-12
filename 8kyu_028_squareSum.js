// 문제
// 각 숫자를 제곱한 다음, 각 값을 합산한다.

function squareSum(arr) {

  // 풀이1
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result += (arr[i] * arr[i])
  }

  return result
  
  //풀이2
  return arr.reduce((result, i) => result + (i * i), 0)
}

squareSum([1, 2, 3, 4]); // 30 (1 + 4 + 9 + 16)
squareSum([2, 2, 2, 2]); // 16 (4 + 4 + 4 + 4)
