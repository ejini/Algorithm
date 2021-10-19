// 문제
// 문장의 왼쪽에서 오른쪽으로 n개의 느낌표를 제거한다.

function removeNExclamation(str, n) {

  // 풀이1
  let result = ''
  let count = 0

  for (let i = 0; i <= str.length - 1; i++) {
    if (count < n) {
      if (str[i] === '!') {
        count++
      } else {
        result += str[i]
      }
    } else {
      result += str[i]
    }
  }

  return result

  // 풀이2
  let test = str

  for (let i = 0; i < n; i++) {
    test = test.replace(/[!]/, '')
  }

  return test
}

removeNExclamation('!!abc!!', 1); // !abc!!
removeNExclamation('!!abc!!', 2); // abc!!
removeNExclamation('!!abc!!', 3); // abc!
removeNExclamation('!!abc!!', 4); // abc
