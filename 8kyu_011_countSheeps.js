// 문제
// 배열에 있는 양의 수를 반환한다.

function countSheeps(arr) {

  // 풀이1
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum

  // 풀이3
  return arr.reduce((result, i) => result + i, 0)

  // 풀이4
  return arr.filter(i => i).length
}

console.log(countSheeps([])); //0
console.log(countSheeps([true, false, false, true])); //2
console.log(countSheeps(
  [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, false, true
  ]
)); //16

// (풀이1) true:1 / false:0