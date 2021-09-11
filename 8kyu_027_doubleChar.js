// 문제
// 주어진 문자열의 각 문자가 한 번 더 반복되는 문자열을 반환한다.
// 대소문자를 구분한다.

function doubleChar(str) {

  // 풀이1
  const arr = [...str]
  let result = []

  for (let i = 0; i < arr.length; i++) {
    result += arr[i] + arr[i]
  }

  return result

  //풀이 2
  return str.split('').map(i => i.replace(i, i + i)).join('')
}

doubleChar('abcd'); // aabbccdd
doubleChar('1234'); // 11223344
