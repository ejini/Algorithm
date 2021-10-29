// 문제
// n 번째 짝수를 반환한다.
// 입력에 0은 제외한다.

function nthEven(n) {
  // 풀이1
  let count = 0

  for (let i = 1; i < n; i++) {
    count = count + 2
  }

  return count

  // 풀이2
  return n * 2 - 2

  // 풀이3
  let result = []

  for (let i = 0; i < n * 2; i+=2) {
    result.push(i)
  }

  return result[result.length - 1]

  // 풀이4
  let result = []

  for (let i = 0; i < n * 2; i+=2) {
    result.push(i)
  }

  return result.pop()
}

nthEven(1); // 0
nthEven(2); // 2 (0, 2)
nthEven(3); // 4 (0, 2, 4)
nthEven(100); // 198 (0, 2, 4, ..., 196, 198)
