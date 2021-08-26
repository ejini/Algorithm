// 문제
// 두 배열의 합을 반환한다.
// 각 배열에는 정수만 포함된다.

function arrayPlusArray(arr1, arr2) {
  
  // 풀이1
  let arr = []
  let result = 0

  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i])
  }

  for (let j = 0; j < arr2.length; j++) {
    arr.push(arr2[j])
  }

  for (let k = 0; k < arr.length; k++) {
    result += arr[k]
  }

  return result

  // 풀이2
  let result = 0
  arr1.concat(arr2).forEach(i => result += i)

  return result

	// 풀이3
	const newArr = [
    ...arr1,
    ...arr2
  ]

  return newArr.reduce((result, i) => result + i, 0)

	// 풀이4
	arr1.push(...arr2)

  return arr1.reduce((result, i) => result + i, 0)

	// 풀이5
	return arr1.concat(arr2).reduce((result, i) => result + i, 0)
}

arrayPlusArray([1, 2, 3], [4, 5, 6]); // 21
arrayPlusArray([10, 20, 30], [40, 50, 60]); // 210