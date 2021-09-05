// 문제
// a, b, c 3개의 정수 값을 사용하는 메소드를 작성한다.
// 주어진 길이의 변으로 삼각형을 만들 수 있으면 true를 반환하고, 그렇지 않으면 false를 반환한다.

function isTriangle(a, b, c) {

  // 풀이1
  const num = [a, b, c].sort((a, b) => a - b);

  if (num[0] + num[1] > num[2]) {
    return true;
  } else {
    return false;
  }
}

isTriangle(1, 1, 1); // true
isTriangle(1, 1, 2); // false
isTriangle(1, 2, 2); // true