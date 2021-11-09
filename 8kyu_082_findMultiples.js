// 문제
// ‘integer’의 배수를 'limit' 값까지 배열로 반환한다.

function findMultiples(integer, limit) {

  // 풀이1
  let result = []
  const len = Math.floor(limit/integer)

  for (let i = 1; i <= len; i++) {
    result.push(integer * i)
  }

  return result

  // 풀이2
  let result = []

  for (let i = 1; i <= limit; i++) {
    if (i % integer === 0) result.push(i)
  }

  return result  
}
findMultiples(2, 8); // [2, 4, 6, 8]
findMultiples(2, 9); // [2, 4, 6, 8]
findMultiples(4, 18); // [4, 8, 12, 16] 
