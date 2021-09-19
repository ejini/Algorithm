// 문제
// 배열에 x가 포함되어 있으면 true, 그렇지 않으면 false를 반환한다.

function check(arr, x) {

  // 풀이1
  return arr.indexOf(x) !== -1 ? true : false

  // 풀이2
  return arr.includes(x)

  // 풀이3
  return arr.findIndex(i => i === x) !== -1 ? true : false
}

check([1, 2, 3, 4], 4); // true
check([1, 2, 3, 4], 5); // false
check(['a', 'b', 'c'], 'd'); // false
