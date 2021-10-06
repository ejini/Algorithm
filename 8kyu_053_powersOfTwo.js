// 문제
// 2의 거듭제곱을 배열로 반환한다.
// 지수는 0부터 n까지이다.

// 지수 (exponent): 어떤 수의 오른쪽 위에 덧붙여 쓰여, 그 거듭제곱을 한 횟수를 나타내는 수.
// ex) 2^e (2를 ‘밑’이라 하고, e를 ‘지수’라 한다)

// 거듭제곱 (power): 같은 수나 식을 거듭 곱하거나, 그렇게 하여 얻어진 수.

// 2가 2진수의 밑이므로, 2의 거듭제곱은 전산학에서 중요한 수가 된다.
// 2의 거듭제곱은 컴퓨터 메모리의 단위로 쓰인다.

function powersOfTwo(n) {
  // 풀이1
  const result = []
  let init = 1

  for (let i = 0; i <= n; i++) {
    let cal = init * 2
    if (i === 0) {
      result.push(0)
    } else {
      result.push(cal)
      init = cal
    }
  }
  
  return result

  // 풀이2
  let result = []

  for (let i = 0; i <= n; i++) {
    result.push(2 ** i)
    // = result.push(Math.pow(2, i))
  }

  return result
}


powersOfTwo(0); // [1]
powersOfTwo(1); // [1, 2]
powersOfTwo(2); // [1, 2, 4]
powersOfTwo(3); // [1, 2, 4, 8]
powersOfTwo(4); // [1, 2, 4, 8, 16]
powersOfTwo(8); // [1, 2, 4, 8, 16, 32, 64, 128, 256]
