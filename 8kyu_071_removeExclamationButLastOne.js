// 문제
// 문자열의 느낌표를 모두 제거하고, 문자열 끝에 느낌표 하나를 표시한다.

function removeExclamationButLastOne(str) {

  // 풀이1
  let arr = str.split('!')
  arr.push('!')
  return arr.join('')

  // 풀이2
  let result = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '!') {
      result += str[i]
    }
  }

  return result + '!'

  // 풀이3
  return str.split('!').join('') + '!'
}

removeExclamationButLastOne('!!abc'); // abc!
removeExclamationButLastOne('a!b!c'); // abc!
