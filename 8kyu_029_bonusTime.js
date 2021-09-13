// 문제
// salary는 정수, bonus는 boolean 값이다.
// bonus가 true라면, salary에 10을 곱한다.
// bonus가 false라면, 명시된 salary를 받는다.
// 총 금액을 ‘$‘와 함께 문자열로 반환한다.

function bonusTime(salary, bonus) {

  // 풀이1
  if (bonus) {
    return `$${(salary * 10)}`
  } else {
    return `$${salary}`
  }

  // 풀이2
  return (bonus) ? `$${(salary * 10)}` : `$${salary}`
}

bonusTime(4400, true); // $44000
bonusTime(4400, false); // $4400
