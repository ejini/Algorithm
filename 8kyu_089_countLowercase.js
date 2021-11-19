// 문제
// 문자열의 소문자 수를 계산한다.

function countLowercase(str) {

  // 풀이1
  const arr = str.split('')
  const specialChars = /[~!@#$%^&*()_+|<>?:{}]/;

  let result = 0

  for (let i = 0; i < arr.length; i++) {
    if (str[i] === str[i].toLowerCase() && !specialChars.test(str[i])) {
      result ++
    }
  }

  return result

  // 풀이2
  const specialChars = /[A-Z~!@#$%^&*()_+|<>?:{}]/;

  return str.split('').filter(i => !specialChars.test(i)).length
}

countLowercase('@'); // 0
countLowercase('abcdEFGH'); // 4
countLowercase('@#!?abcd'); // 4
