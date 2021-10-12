// 문제
// 문자열의 끝에 있는 느낌표(!)를 제거한다.

function removeLastExclamation(str) {

  // 풀이1
  return str.lastIndexOf('!') === str.length-1 ? str.slice(0, str.length-1) : str

  // 풀이2
  let result = ''

  for (let i = 1; i <= str.length; i++) {
    if (i === str.length && str[i - 1] === '!') {
      result += ''
    } else {
      result += str[i - 1]
    }
  }

  return result
}

removeLastExclamation('abc!'); // abc
removeLastExclamation('!abc'); // !abc
removeLastExclamation('!!!!'); // !!!
