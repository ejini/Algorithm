// 문제
// 문자열의 공백(space)을 제거하고 반환한다.

function removeSpace(str) {
  
  // 풀이1
  const arr = [...str]
  let result = ''
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== " ") result += arr[i]
  }

  return result

  // 풀이2
  return str.split(' ').join('')

  // 풀이3
  return str.replace(/ /g,"")
  
  // 풀이4
  return str.replace(/(\s*)/g,"")
}

removeSpace(''); // ''
removeSpace(' '); // ''
removeSpace('Hello World'); // HelloWorld
removeSpace('He llo Wo rld'); // HelloWorld