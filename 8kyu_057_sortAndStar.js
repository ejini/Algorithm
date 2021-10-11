// 문제
// 알파벳순으로 정렬하고, 첫 번째 값을 반환한다.
// 반환된 값은 문자열(string)이어야 하고, 각 글자 사이에 ***가 있어야 한다.

function sortAndStar(arr) {

  // 풀이1
  let result = []
  const firstVal = arr.sort()[0]

  for (let i = 0; i < firstVal.length; i++) {
    if (i === firstVal.length - 1) {
      result.push(firstVal[i])
    } else {
      result.push(firstVal[i] + '***') 
    }
  }

  return result.join('')

  // 풀이2
  return arr.sort()[0].split('').join('***')
}

sortAndStar(['c', 'bb', 'aaa']); // a***a***a
sortAndStar(['ape', 'ace', 'abc']); // a***b***c
