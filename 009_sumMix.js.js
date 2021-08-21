// 문제
// 문자열과 숫자의 정수 배열이 주어진다.
// 배열 값의 합을 숫자로 반환한다.

function sumMix(arr) {

  // 풀이1
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result  += parseInt(arr[i], 10)
  }

  return result

  // 풀이2
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result  += parseFloat(arr[i])
  }

  return result

  // 풀이3
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result  += Number(arr[i])
  }

  return result
	
	// 풀이4
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result += +arr[i]
  }

  return result
}

sumMix([1, '2', 3, '4']); // 10
sumMix(['1', 2, '3', 4]); // 10
