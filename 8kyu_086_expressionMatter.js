// 문제
// 주어진 세 개의 정수 ‘a’, ‘b’, ‘c’에 +, * 연산자와 괄호 ()를 삽입한 후, 가장 큰 수를 반환한다.

function expressionMatter(a, b, c) {

  // 풀이1
  return Math.max((a + b) * c, (a + b) + c, (a * b) + c, (a * b) * c)
}

expressionMatter(2, 2, 2); // 8
expressionMatter(1, 2, 3); // 9
