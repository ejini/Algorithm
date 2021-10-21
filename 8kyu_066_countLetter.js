// 문제
// 첫 번째 인수에서 찾아낸 두 번째 인수의 횟수를 반환한다.

function countLetter(str, letter) {

  // 풀이1
  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) count ++
  }

  return count

  // 풀이2
  return str.split('').reduce((result, i) => i === letter ? result + 1 : result ,0)
}

countLetter('abcd', 'a'); // 1
countLetter('aaaa', 'a'); // 4
countLetter('ssup', 's'); // 2
