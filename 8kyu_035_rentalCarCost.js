// 문제
// 렌트카 비용은 하루에 $40이다.
// 7일 이상 렌트하면, 총 금액에서 $50이 할인된다.
// 3일 이상 렌트하면, 총 금액에서 $20이 할인된다.
// 일수에 따라 총 금액을 반환한다.

function rentalCarCost(days) {
  
  // 풀이1
  if (days >= 7) {
    return (days * 40 ) - 50
  } else if (days >= 3) {
    return (days * 40 ) - 20
  } else {
    return days * 40
  }

  // 풀이2
  const cost = 40
  let discount = 0

  if (days >= 7) discount = 50
  else if (days >= 3 && days < 7) discount = 20
  
  return cost * days - discount
}

rentalCarCost(1); // 40
rentalCarCost(2); // 80
rentalCarCost(3); // 100 (120 - 20)
rentalCarCost(4); // 140
rentalCarCost(5); // 180
rentalCarCost(6); // 220
rentalCarCost(7); // 230 (280 - 50)
rentalCarCost(8); // 270
rentalCarCost(9); // 310
rentalCarCost(10); // 350
