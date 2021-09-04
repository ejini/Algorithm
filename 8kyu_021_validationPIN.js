// 문제
// ATM 기계는 정확히 4 또는 6자리 PIN 코드를 사용한다.
// 함수에 유효한 PIN 문자열이 전달되면 true를 반환하고, 그렇지 않으면 false를 반환한다.

function validatePIN(str) {

	// 풀이1
	if (str > 0 && (str.length === 6 || str.length === 4)) {
		if (str.indexOf('.') === -1) {
		return true;
		} else {
		return false;
		}
	} else return false;
}

validatePIN('1234'); // true
validatePIN('12345'); // false
validatePIN('123456'); // true
validatePIN('-234'); // false
validatePIN('.234'); // false
validatePIN('a234'); // false