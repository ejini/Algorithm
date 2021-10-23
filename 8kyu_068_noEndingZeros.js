// 문제
// 0으로 끝나는 숫자들을 제거한다.

function noEndingZeros(n) {

  // 풀이1
  const numStr = n.toString()
  const len = numStr.length - 1
  let result = []
  let flag = false
  
  for (let i = len; i >= 0; i--) {
    if (len == '0') {
      result.push('0')
    } else if (numStr[i] == '0' && !flag) {
      result.push('')
    } else {
      flag = true
      result.unshift(numStr[i])
    }
  }

  return result.join('')
}

noEndingZeros(0); // 0
noEndingZeros(19880); // 1988
noEndingZeros(198800); // 1988
noEndingZeros(1988000); // 1988
