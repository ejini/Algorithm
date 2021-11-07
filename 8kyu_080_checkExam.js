// 문제
// 첫 번째 배열은 시험에 대한 올바른 정답이다.
// 두 번째 배열은 학생의 정답이다.
// 각 올바른 정답에는 +4, 올바르지 않은 정답에는 -1, 공백 정답에는 +0이 주어진다.
// 해답 배열에 대한 점수를 반환한다.
// 점수가 0보다 낮다면 0을 반환한다.

function checkExam(arr1, arr2) {

  // 풀이1
  let result = 0

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      result += 4
    } else {
      if (arr2[i] !== '') {
        result -= 1
      }
    }
  }

  return (result < 0) ? 0 : result

  // 2
  const result = arr1.reduce((result, i, idx) => {
    if (i === arr2[idx]) return result + 4
    else return (arr2[idx] !== '') ? (result - 1) : result
  },0)

  return (result < 0) ? 0 : result
}

checkExam(['a', 'b', 'c'], ['a', 'b', 'c']); // 12
checkExam(['a', 'b', 'c'], ['a', 'b', 'x']); // 7
checkExam(['a', 'b', 'c'], ['a', 'b', '']); // 8
checkExam(['a', 'b', 'c'], ['a', '', '']); // 4
checkExam(['a', 'b', 'c'], ['a', 'x', 'x']); // 2
checkExam(['a', 'b', 'c'], ['', '', '']); // 0
checkExam(['a', 'b', 'c'], ['x', 'x', 'x']); // 0
