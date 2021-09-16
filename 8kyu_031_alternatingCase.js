// 문제
// 각 소문자는 대문자로, 각 대문자는 소문자로 반환한다.

function alternatingCase(str) {

  // 풀이1
  return str.split('').map(i => i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase()).join('');

  // 풀이2
  let arr = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      arr.push(str[i].toUpperCase())
    } else {
      arr.push(str[i].toLowerCase())
    }
  }

  return arr.join('')
}

alternatingCase('abcd'); // ABCD
alternatingCase('ABCD'); // abcd
alternatingCase('cODeWarS'); // CodEwARs
