// 문제
// 문자열로 주어진 16진수를 10진수로 변환한다.

function hexToDecimal(hexString) {
  // 풀이1
  const hex = hexString;
  const dec = parseInt(hex, 16); // === "123"

  return dec
}

hexToDecimal('1'); // 1
hexToDecimal('a'); // 10
hexToDecimal('10'); // 16
hexToDecimal('FF'); // 255
hexToDecimal('-C'); // -12
