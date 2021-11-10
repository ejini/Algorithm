// 문제
// 세 가지 score의 평균을 찾고, 해당 성적과 관련된 문자 값을 반환한다.
// 테스트된 값은 모두 0에서 100 사이의 숫자이다.

// 90 <= score <= 100: A
// 80 <= score < 90: B
// 70 <= score < 80: C
// 60 <= score < 70: D
// 0 <= score < 60: F

function getGrade(s1, s2, s3) {
  // 풀이1
  const score = (s1 + s2 + s3) / 3

  if (score >= 90) return 'A'
  else if (score >= 80 && score < 90) return 'B'
  else if (score >= 70 && score < 80) return 'C'
  else if (score >= 60 && score < 70) return 'D'
  // else if (score >= 0) return 'F'

  // 풀이2
  const score = (s1 + s2 + s3) / 3
  const grade = {
    'A' : (score >= 90),
    'B' : (score >= 80 && score < 90),
    'C' : (score >= 70 && score < 80),
    'D' : (score >= 60 && score < 70),
    'F' : (score >= 0),
  }

  if (grade['A']) return 'A'
  else if (grade['B']) return 'B'
  else if (grade['C']) return 'C'
  else if (grade['D']) return 'D'
  else if (grade['F']) return 'F'
}

getGrade(92, 93, 94); // A
getGrade(82, 83, 84); // B
getGrade(72, 73, 74); // C
getGrade(62, 63, 64); // D
getGrade(52, 53, 54); // F
