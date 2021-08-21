// 문제
// 배열에서 가장 높은 element와 가장 낮은 element를 제외하고 모든 숫자를 합한다.
// 배열이 비어 있거나, null이거나, 1개의 element만 있는 경우 0을 반환한다.

function sumWithoutMaxAndMin(arr) {

  // 풀이1
	const min = Math.min(...arr)
  const max = Math.max(...arr)

  let sum = 0

  arr.filter(i => i > min && i < max).forEach(item => sum += item);
  return sum

  
  // 풀이2
  let result = 0
  const sortArr = arr.sort((a, b) => a - b) // [5, 6, 7, 8]

  for (let i = 1; i < sortArr.length - 1; i++) {
    result += sortArr[i]
  }

  return result

  // 풀이3
  return arr.sort((a, b) => a - b).slice(1, -1).reduce((result, i) => result + i, 0)
}

sumWithoutMaxAndMin([]); // 0
sumWithoutMaxAndMin([1]); // 0
sumWithoutMaxAndMin([1, 2]); // 0
sumWithoutMaxAndMin([1, 2, 3]); // 2
sumWithoutMaxAndMin([1, 2, 3, 4]); // 5 (2 + 3)
sumWithoutMaxAndMin([2, 4, 1, 3]); // 5 (2 + 3)
sumWithoutMaxAndMin([5, 6, 7, 8]); // 13 (6 + 7)
sumWithoutMaxAndMin([8, 5, 7, 6]); // 13 (6 + 7)
