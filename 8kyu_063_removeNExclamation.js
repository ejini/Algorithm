// 문제
// 문장의 왼쪽에서 오른쪽으로 n개의 느낌표를 제거한다.

function removeNExclamation(str, n) {

  // 풀이1
  let result = ''
  let count = n

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '!') {
      if (count === 0) {
        result += str[i]
      } else {
        result += ''
        count --
      }
    } else {
      result += str[i]
    }
  }

  return result
}

removeNExclamation('!!abc!!', 1); // !abc!!
removeNExclamation('!!abc!!', 2); // abc!!
removeNExclamation('!!abc!!', 3); // abc!
removeNExclamation('!!abc!!', 4); // abc
