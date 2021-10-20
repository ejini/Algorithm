// 문제
// 특정 길이의 pixel 수(정수)가, 특정 길이의 벽에 정확히 부합할 수 있는지 확인한다.

function isDivisiblePixel(wallLength, pixelSize) {
  
  // 풀이1
  return wallLength % pixelSize === 0 ? true : false
}

isDivisiblePixel(1000, 1); // true
isDivisiblePixel(1000, 2); // true
isDivisiblePixel(1000, 3); // false
isDivisiblePixel(1000, 4); // true
isDivisiblePixel(1000, 5); // true
isDivisiblePixel(1000, 6); // false
