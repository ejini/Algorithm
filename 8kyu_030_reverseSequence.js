// 문제
// n부터 1까지 연속된 수로 반환한다. (역순)

function reverseSequence(n) {

  // 풀이1
  let arr = []

  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }

  return arr.sort((a, b) => b - a)

  // 풀이2
  let arr = []

  for (let i = n; i >= 1; i--) {
    arr.push(i)
  }

  return arr

  // 풀이3
  return n === 1 ? [1] : [n].concat(reverseSequence(n - 1)) // (재귀)
}

reverseSequence(4); // [4, 3, 2, 1]
reverseSequence(5); // [5, 4, 3, 2, 1]
reverseSequence(1); // [1]
