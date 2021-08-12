// 문제
// 짝수의 경우 'Even'을 반환하고,
// 홀수의 경우 'Odd'를 반환한다.

function evenOrOdd(n) {

  // 풀이1
  if (n % 2) {
    return 'Odd'
  } else {
    return 'Even'
  }

  // 풀이2
  return n % 2 === 0 ? 'Even' : 'Odd'

  // 풀이3
  return n % 2 ? 'Odd' : 'Even' // 0:false
}

evenOrOdd(0); // Even
evenOrOdd(1); // Odd
evenOrOdd(2); // Even
evenOrOdd(3); // Odd
evenOrOdd(4); // Even


// 나머지가 0이면 'Even', 0이 아니면 'Odd' 반환

// [삼항 조건 연산자]
// 1. 조건문 ? 조건이 참일 때 실행할 식 : 조건이 거짓일 때 실행할 식
// 2. false외에도 null, NaN, 0, 비어있는 문자 값 (""), 그리고 undefined으로 조건문에 false 값으로 사용 가능