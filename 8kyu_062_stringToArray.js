// 문제
// 문자열을 분할해서 단어의 배열로 반환한다.

function stringToArray(str) {

  // 풀이1
  return str.split(' ')
}

stringToArray('abc'); // ['abc']
stringToArray('ab c'); // ['ab', 'c']
stringToArray('aa b ccc'); // ['aa', 'b', 'ccc']
