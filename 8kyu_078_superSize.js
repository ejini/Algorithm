// 문제
// 정수를 가장 큰 값으로 재배열한다.

function superSize(n) {

  // 풀이1
  return String(n).split('').sort((a ,b) => (b - a)).join('')
}

superSize(1988); // 9881
superSize(2019); // 9210
superSize(4812950736); // 9876543210
