// 문제
// 주어진 배열에서 숫자의 평균을 계산한다.

function findAverage(arr) {

  // 풀이1
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }

  return result / arr.length

  // 풀이2
  return arr.reduce((result, i) => result + i, 0) / arr.length

  // 풀이3
  return arr.reduce((result, i, idx) => idx === arr.length - 1 ? (result + i) / arr.length : result + i );
}

findAverage([1, 2, 3]); // 2
findAverage([1, 2, 3, 4]); // 2.5
findAverage([2, 2, 2, 2]); // 2

// (풀이3) reduce함수를 초기값 지정 없이 호출하면 배열의 첫번째 요소가 초기값으로 사용되는데, 빈 배열([])일 경우 초기값이 없어 오류가 발생하므로 초기값은 지정하는게 좋다.