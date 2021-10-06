// 문제
// 두 꽃 중 한 꽃에 짝수 개의 꽃잎, 다른 꽃에 홀수 개의 꽃잎이 있다면 사랑에 빠졌다는 의미이다.
// 사랑에 빠졌다면 true, 그렇지 않으면 false를 반환한다.

function lovePetals(flower1, flower2) {
  
  // 풀이1
  const sum = flower1 + flower2
  return sum % 2 === 0 ? false : true
}

lovePetals(1, 4); // true
lovePetals(2, 4); // false
