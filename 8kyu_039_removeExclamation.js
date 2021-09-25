// 문제
// 주어진 문자열에서 모든 느낌표(!)를 제거한다.

function removeExclamation(str) {
  
  // 풀이1
  const result = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '!') result.push(str[i])
  }

  return result.join('')

  // 풀이2
  return str.split('!').join('')

  // 풀이3
  return str.replace(/!/g, '')
}

removeExclamation('abcd!!'); // abcd
removeExclamation('!!abcd'); // abcd
removeExclamation('ab!!cd'); // abcd
removeExclamation('a!bc!d'); // abcd
