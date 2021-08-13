// 문제
// 네 가지 기본 수학 연산을 수행하는 함수를 작성한다.

function mathOperation(operation, value1, value2) {
  
  // 풀이1
  if (operation === '+') return value1 + value2
  if (operation === '-') return value1 - value2
  if (operation === '*') return value1 * value2
  if (operation === '/') return value1 / value2

  // 풀이2
  switch(operation) {
    case '+': return value1 + value2
    case '-': return value1 - value2
    case '*': return value1 * value2
    case '/': return value1 / value2
  }
  
  // 풀이3
  const obj = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2,
  }

  return obj[operation]
}

mathOperation('+', 4, 4); // 8
mathOperation('-', 8, 2); // 6
mathOperation('*', 2, 4); // 8
mathOperation('/', 16, 2); // 8


// (풀이3) 객체['key'] 방식으로 접근하여 값을 반환

// 객체의 프로퍼티 접근방법
// 1. 객체.key (다른 변수를 통해 key값을 참조할 수 없다. 객체의 프로퍼티만 허용된다.)
// 2. 객체['key'] (다른 변수를 통해 key값을 참조할 수 있다. 따옴표가 감싸져 있지 않으면 변수로 해석한다. (객체[key]))