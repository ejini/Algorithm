// 문제
// 이름을 이니셜로 반환한다.
// 점으로 구분된 두 개의 대문자로 출력한다.

function abbreviateName(name) {
  // 풀이1
  return name.split(' ').map(i => i.slice(0, 1).toUpperCase()).join('.')
}

abbreviateName('Sam Azor'); // S.A
abbreviateName('sam azor'); // S.A
abbreviateName('Ralph Donovan'); // R.D
abbreviateName('ralph donovan'); // R.D
