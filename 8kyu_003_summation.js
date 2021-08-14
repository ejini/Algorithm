// 문제
// 1부터 n까지 모든 숫자의 합을 반환한다.
// 숫자는 항상 0보다 큰 양의 정수이다.

function summation(n) {

  // 풀이1
  let result = 0

  for (let i = 1; i <= n; i++) {
    result += i
  }

  return result;

  // 풀이2 (등차수열의 합 공식)
  return (n * (n + 1)) / 2

  // 풀이3 (재귀적 용법)
  return n !== 0 ? n + summation(n - 1) : 0
}

summation(1); // 1
summation(2); // 3 (1 + 2)
summation(3); // 6 (1 + 2 + 3)
summation(4); // 10 (1 + 2 + 3 + 4)