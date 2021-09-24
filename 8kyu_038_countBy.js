// 문제
// x의 배수(multiple)로 길이 n의 배열을 반환한다.

function countBy(x, n) {

  // 풀이1
  const result = []

  for (let i = 1; i <= n; i++) {
    result.push(x * i)
  }

  return result

  // 풀이2
  const result = new Array(n)

  for (let i = 0; i < n; i++) {
    result[i] = x * i + x
  }

  return result
}
countBy(1, 4); // [1, 2, 3, 4]
countBy(2, 4); // [2, 4, 6, 8]
countBy(3, 4); // [3, 6, 9, 12]
countBy(4, 4); // [4, 8, 12, 16]
