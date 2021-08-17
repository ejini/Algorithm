// 문제
// 가장 작은 정수를 반환한다.

function findSmallest(arr) {

  // 풀이1
  let min = arr[0]

  for (let i = 0; i < arr.length; i++) {
    arr[i] < min ? min = arr[i] : min
  }

  return min
  
  // 풀이2
  return Math.min(...arr);

  // 풀이3
  return Math.min.apply(null, arr)
  
  // 풀이4
  return arr.reduce((a, b) => a < b ? a : b, arr[0])

  // 풀이5
  return arr.sort((a, b) => a - b).slice(0, 1)[0]

  // 풀이6
  return arr.sort((a, b) => a - b)[0]

  // 풀이7
  return arr.sort((a, b) => b - a)[arr.length - 1]
}

findSmallest([1, 2, 3, 4]); // 1
findSmallest([4, 7, 2, 1]); // 1
findSmallest([-1, 0, 1, 2]); // -1
findSmallest([8, 6, 8, 8]); // 6

// (풀이3) apply()함수 :
// 함수를 호출하는 방법중 하나.(call함수와 유사)
// apply(함수에서 사용할 this객체, 호출하는 함수로 전달할 파라미터(배열형태))
// Math.min()함수는 this객체가 필요없기 때문에 첫번째 파라미터로 null을 전달한다.