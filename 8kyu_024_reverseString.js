// 문제
// 문자열을 반전한다.

function reverseString(str){

 	 // 풀이1
	return [...str].reverse().join('')

	// 풀이2
	return str.split('').reverse().join('')
}

reverseString('abc'); // cba
reverseString('CBA'); // ABC