// 문제
// 모든 숫자 문자를 제거한다.
// 공백과 특수 문자는 그대로 반환한다.

function cleanStr(str) {

  // 풀이1
  let result = []

  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i]) || str[i] === ' ') {
      result.push(str[i])
    }
  }

  return result.join('')

  // 풀이2
  return str.replace(/[0-9]/g, '')
}

cleanStr(''); // ''
cleanStr('1234'); // ''
cleanStr('ab12'); // ab
cleanStr('a a'); // a a