// 문제
// size 수만큼 문자열 1과 0을 번갈아 반환한다.
// 문자열은 1로 시작한다.

function stringy(size) {
  
  // 풀이1
  const result = []
  for (let i = 0; i < size; i++) {
    i % 2 === 0 ? result.push(1) : result.push(0)
  }

  return result.join('')
}

stringy(1); // 1
stringy(2); // 10
stringy(3); // 101
stringy(4); // 1010
console.log(typeof stringy(4)); // string
