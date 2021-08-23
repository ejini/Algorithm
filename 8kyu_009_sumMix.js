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

// (풀이1) parseInt(string, radix) : 
// string을 특정진수(radix)의 값으로 표현한 정수를 반환한다.
// string의 첫 글자를 정수로 변경 할 수 없으면 NAN값을 반환한다.

// (풀이2) parseFloat(string) :
// string을 실수로 변환한 값을 반환한다. 변환할 수 없는면 NAN값을 반환한다.

// (풀이4) "+" 단항 연산자:
// 문자열 앞에 단항 연산자('+')를 붙여주면 문자열을 숫자 타입으로 변환하여 반환한다. 변환할 수 없면 NAN값을 반환한다.