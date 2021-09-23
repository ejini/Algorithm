// 문제
// 숫자가 정수 제곱근을 가지면 제곱근을 반환하고, 그렇지 않으면 제곱한다.

// 제곱근(Square Root):
// 어떤 수 a를 두 번 곱하여 x가 되었을 때, a를 x에 대하여 이르는 말.

function squareOrSquareRoot(arr) {
  
  // 풀이1
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(Math.sqrt(arr[i]))) {
      result.push(Math.sqrt(arr[i]))
    } else {
      result.push(arr[i] * arr[i])
    }
    
  }

  return result

  // 풀이2
  return arr.map(i => Number.isInteger(Math.sqrt(i)) ? Math.sqrt(i) : i * i)
}

squareOrSquareRoot([1, 2, 3, 4]); // [1, 4, 9, 2]
squareOrSquareRoot([16, 20, 100, 121]); // [4, 400, 10, 11]