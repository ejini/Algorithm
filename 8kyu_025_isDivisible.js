// 문제
// 숫자 n이 두 숫자 x와 y로 나눠질 수 있는지 확인한다.
// 모든 입력은 양수이다. (0은 양수도 아니고, 음수도 아니다)

function isDivisible(n, x, y) {

  // 풀이1
  return (n % x === 0 && n % y === 0) ? true : false
}

isDivisible(12, 1, 12); // true
isDivisible(12, 2, 6); // true
isDivisible(12, 3, 4); // true
isDivisible(12, 3, 5); // false