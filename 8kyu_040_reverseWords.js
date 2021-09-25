// 문제
// 문자열의 모든 단어를 반전한다.

function reverseWords(str) {
  
  // 풀이1
  const words = str.split(' ')
  const result = []

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
      result.push(words[i])
    }    
  }

  return result.reverse().join(' ')

  // 풀이2
  let result = []

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i])
  }

  return result.join('')

  // 풀이3
  return str.split(' ').reverse().join(' ')
}

reverseWords('a b c'); // c b a
reverseWords('1 22  333 4444'); // 4444 333 22 1
