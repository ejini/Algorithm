// 문제
// ‘a’부터 ‘z’까지의 문자만 포함하는 두 개의 문자열 ‘str1’과 ‘str2’를 사용한다.
// 고유한 문자만 포함하는, 새로 정렬된 문자열을 반환한다.

function twoToOne(str1, str2) {
  
   // 풀이1
   const str = str1.concat(str2).split('')
   const result = []
   for (let i = 0; i < str.length; i++) {
     if (!result.includes(str[i])) result.push(str[i])   
   }
 
   return result.join('')
 
    // 풀이2
    const str = str1.concat(str2).split('')
    const result = []
    str.filter(i => {
        if (!result.includes(i)) result.push(i)
    })

    return result.join('')

    // 풀이3
    const str = [...str1.concat(str2)]
    
    const result = str.filter((i, index) => {
        return str.indexOf(i) === index
    })

    return result.join('')
 
    // 풀이4
    const str = [...str1.concat(str2)]
    const set = new Set(str)
    const uniqueArr = [...set]
    
    return uniqueArr.join('')
}

twoToOne('ab', 'cd'); // abcd
twoToOne('aa', 'aa'); // a
twoToOne('ab', 'abcd'); // abcd