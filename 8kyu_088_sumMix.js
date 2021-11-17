// 문제
// 문자열과 숫자로 주어진 정수의 배열에서 모든 수를 숫자로 가정하고, 배열 값의 합을 반환한다.

function sumMix(arr) {

  // 풀이1
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result += Number(arr[i])
  }

  return result

  // 풀이2
  return arr.reduce((result, i) => result + Number(i), 0)
}

sumMix([1, '2', 3, '4']); // 10
sumMix([4, '4', 4, '4']); // 16
