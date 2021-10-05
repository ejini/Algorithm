// 문제
// 문장의 모든 모음을 느낌표(!)로 변경한다.

function replaceVowels(str) {

  // 풀이1
  let result = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
      result.push('!')
    } else {
      result.push(str[i])
    }
  }

  return result.join('')

  // 풀이2
  const target = /[AEIOU]/gi;
  let result = []

  str.split('').map(i => i.match(target) ? result.push('!') : result.push(i))

  return result.join('') 
}

replaceVowels('aeiou'); // !!!!!
replaceVowels('AEIOU'); // !!!!!
replaceVowels('abcde'); // !bcd!
replaceVowels('apple'); // !ppl!
