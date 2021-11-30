// 문제
// 주어진 문자열이 0부터 9까지의 숫자라면 true를 반환하고, 그렇지 않으면 false를 반환한다.

function isDigit(str) {

  // 풀이1
  return str !== '' && Number(str) >= 0 && Number(str) < 10
}

isDigit(''); // false
isDigit('0'); // true
isDigit('a'); // false
isDigit('9'); // true
isDigit('10'); // false
