// 문제
// 주어진 숫자 문자열에서, 5 미만의 수를 0으로, 5 이상의 수를 1로 반환한다.

function fakeBinary(x) {

  // 풀이1
  let result = []

  for (let i = 0; i < [...x].length; i++) {
    if (x[i] < 5) {
      result.push('0')
    } else {
      result.push('1')
    }
  }

  return result.join('')

  // 풀이2
  return x.split('').map(i => i < 5 ? '0' : '1').join('')
}

fakeBinary('0123456789'); // 0000011111
fakeBinary('4801635297'); // 0100101011
