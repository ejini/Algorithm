// 문제
// 두 번째 인수(tail)가 첫 번째 인수(body)의 마지막 문자와 동일한지 확인한다.

function correctTail(body, tail) {

  // 풀이1
  return (body.charAt(body.length -1)) === tail ? true : false

  // 풀이2
  return (body.substr(body.length -1, 1)) === tail ? true : false

  // 풀이3
  return (body.slice(body.length -1, body.length)) === tail ? true : false
}

correctTail('Fox', 'x'); // true
correctTail('Fox', 'a'); // false
correctTail('Meerkat', 't'); // true
correctTail('Meerkat', 'a'); // false
