// 문제
// 플레이어의 현재 health와 받은 damage를 사용해서, 새로운 health를 반환한다.
// health는 0보다 작을 수 없다.

function combat(health, damage) {
  // 풀이1
  return health - damage >= 0 ? health - damage : 0
}

combat(100, 5); // 95
combat(100, 100); // 0
combat(100, 120); // 0
