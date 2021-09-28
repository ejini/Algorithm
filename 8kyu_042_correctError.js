// 문제
// 디지털화된 텍스트의 에러를 수정한다.

// Errors
// O is misinterpreted as 0
// I is misinterpreted as 1
// S is misinterpreted as 5

function correctError(str) {
  
  // 풀이1
  let result = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') result += 'O'
    else if (str[i] === '1') result += 'I'
    else if (str[i] === '5') result += 'S'
    else result += str[i]
  }

  return result

  // 풀이2
  return str.split('').reduce((result, i) => {
    if (i === '0') {
      return result + 'O'
    } else if(i === '1') {
      return result + 'I'
    } else if(i === '5') {
      return result + 'S'
    } else {
      return result + i
    }
  }, 0).slice(1)  
}

correctError('PAR15'); // PARIS
correctError('L0ND0N'); // LONDON
correctError('C0DEWAR5'); // CODEWARS
