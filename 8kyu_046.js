// 문제
// 주어진 배열의 평균을, 아래쪽으로 가장 가까운 정수로 반올림한다.

function getAverage(arr) {
  
  // 풀이1
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }

  return Math.floor(result / arr.length)

  // 풀이2
  let result = 0
  
  arr.map(i => result += i)
  
  return Math.floor(result / arr.length)

  // 풀이3
  const result = arr.reduce((result, i) => result + i ,0) / arr.length
  return Math.floor(result)
}

getAverage([1, 2, 3, 4]); // 2 (10 / 4 = 2.5)
getAverage([2, 3, 4, 5]); // 3 (14 / 4 = 3.5)