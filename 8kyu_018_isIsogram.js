// 문제
// isogram은 반복되는 문자가 없다.
// 대소문자를 구분하지 않는다.

function isIsogram(str) {
  
    // 풀이1
    const result = []
    let flag = false

    if (str === '') {
        return true
    } else {
        for (let i = 0; i < str.length; i++) {
            if (!result.includes(str[i])) {
                result.push(str[i])
                flag = true
            } else {
                flag = false
                break
            }
        }
    }

	return flag

	// 풀이2
	const strArr = [...str]
    let flag = true

    strArr.forEach((i, index) => {
        if ((strArr.indexOf(i) === index) === false) flag = false
    });

    return flag

	// 풀이3
    const strArr = str.toLowerCase().split('')
    
    const count = strArr.reduce((result, i) => {
        result[i] = (result[i] || 0) + 1
        return result
    }, {})

    if (Object.keys(count).length === 0) {
        return true
    } else {
        for (const key in count) {
        return count[key] > 1 ? false : true
        }
    }
}

console.log(isIsogram('')); // true
console.log(isIsogram('isogram')); // true
console.log(isIsogram('isIsogram')); // false