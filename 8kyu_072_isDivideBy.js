// 문제
// 정수 n을 두 개의 각 인수(a와 b)로 나눌 수 있는지 확인한다.

function isDivideBy(n, a, b) {

  // 풀이1
  return (n % a === 0 && n % b === 0) ? true : false
}

isDivideBy(12, 2, 3); // true
isDivideBy(12, 2, 4); // true
isDivideBy(12, 2, 5); // false
isDivideBy(12, 2, 6); // true
