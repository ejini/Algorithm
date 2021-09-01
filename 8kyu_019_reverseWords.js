// 문제
// 문자열 내 모든 단어를 역순으로 반환한다.

function isIsogram(str) {

    // 풀이1
    const item = str.split(' ')
  
    let result = []
  
    for (let i = 0; i < item.length; i++) {
      result.unshift(item[i])
    }
    return result.join(' ')
  
    // 풀이2
    return str.split(' ').reverse().join(' ')
}

reverseWords('Codewars') // Codewars
reverseWords('Hello World') // World Hello
reverseWords('How are you?') // you? are How