// 문제
// junk로 가득하지만 ‘needle’ 하나를 포함하는 배열이 주어진다.
// ‘needle’의 인덱스와 함께 메시지를 반환한다.

function findNeedle(haystack) {

  // 풀이1
  return `found the needle at position ${haystack.indexOf('needle')}`

  // 풀이2
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return `found the needle at position ${i}`
    }
  }  
}

findNeedle([1, 2, 'needle', 4]); // found the needle at position 2
findNeedle([1, 'a piece of hay', true, 4, 'needle', undefined]); // found the needle at position 4