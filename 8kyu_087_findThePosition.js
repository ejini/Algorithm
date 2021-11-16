// 문제
// 알파벳의 위치를 반환한다.

function findThePosition(letter) {
  
  // 풀이1
  // 65~91 String.fromCharCode(65)
  let result = null

  for (let i = 1; i <= 26; i++) {
    if (letter === String.fromCharCode(64 + i).toLowerCase()) {
      result = i
    }
  }

  return result
}

findThePosition('a'); // 1
findThePosition('b'); // 2
findThePosition('c'); // 3
findThePosition('d'); // 4
findThePosition('z'); // 26