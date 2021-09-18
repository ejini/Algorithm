// 문제
// 문자열을 숫자로 반환한다.

function stringToNumber(str) {

  // 풀이1
  return Number(str)

  // 풀이2
  return parseInt(str, 10)

  // 풀이3
  return parseFloat(str)

  // 풀이4
  return +str
}

stringToNumber('1234'); // 1234
console.log(typeof stringToNumber('1234')); // number
