// 문제
// 문자열의 첫 번째 글자와 마지막 글자를 제거한다.

function removeSpace(str) {
  
  // 풀이1
  const arr = [...str]
  let result = ''

  for (let i = 1; i < arr.length - 1; i++) {
      result += arr[i]
  }

  return result

  // 풀이2
  let arr = [...str]

  arr.shift(0)
  arr.pop(0)

  return arr.join('')

  // 풀이3
  const arr = [...str]
  return arr.slice(1, -1).join('')

  // 풀이4
  let arr = [...str]
  return arr.splice(1, arr.length-2).join('')
}

removeFirstAndLast(''); // ''
removeFirstAndLast('Hello'); // ell
removeFirstAndLast('World'); // orl
removeFirstAndLast('Codewars'); // odewar