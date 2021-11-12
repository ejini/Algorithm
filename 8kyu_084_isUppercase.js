// 문제
// 문자열이 모두 대문자인지 확인한다.

function isUppercase(str) {

  // 풀이1
  let result = false

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) result = true
    else return false
  }

  return result

  // 풀이2
  const uppercase = str.split('').filter(i => i === i.toUpperCase())

  return uppercase.length === str.length ? true : false
}

isUppercase('a'); // false
isUppercase('A'); // true
isUppercase('Code'); // false
isUppercase('CODE'); // true
