// 문제
// 삼각형의 두 각도가 주어진다.
// 세 번째 각도를 반환한다.

function otherAngle(a, b) {
  // 풀이1
  const triangle =  180
  return triangle - (a + b)
  
}

otherAngle(60, 60); // 60
otherAngle(30, 60); // 90
otherAngle(43, 78); // 59
