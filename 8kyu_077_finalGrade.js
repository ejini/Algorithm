// 문제
// 두 개의 매개변수에 따라 학생의 최종 점수를 계산한다.
// 이 함수는 숫자(최종 점수)를 반환한다.
// 최종 점수에는 네 가지 유형이 있다.
// exam이 90보다 크거나, 완료된 projects가 10보다 크다면, 100이다.
// exam이 75보다 크고, 완료된 projects가 최소 5인 경우, 90이다.
// exam이 50보다 크고, 완료된 projects가 최소 2인 경우, 75이다.
// 그 외의 경우, 0이다.

function finalGrade(exam, projects) {

  // 풀이1
  if (exam > 90 || projects > 10) {
    return 100
  } else if (exam > 75 && projects >= 5) {
    return 90
  } else if (exam > 50 && projects >= 2) {
    return 75
  } else {
    return 0
  }
}

finalGrade(91, 0);  // 100
finalGrade(0, 11);  // 100
finalGrade(76, 5);  // 90
finalGrade(75, 5);  // 75
finalGrade(51, 2);  // 75
finalGrade(50, 2);  // 0