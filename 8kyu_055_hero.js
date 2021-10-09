// 문제
// 영웅이 각 용을 패배시키기 위해서는, 2개의 총알이 필요하다.
// 그는 살아남을 수 있을까?

function hero(bullets, dragons) {

  // 풀이1
  //return (bullets > dragons && bullets / 2 >= dragons) ? true : false
  
  // 풀이2
  return dragons * 2 <= bullets ? true : false
}

hero(0, 1); // false
hero(1, 1); // false
hero(2, 1); // true
hero(4, 2); // true
