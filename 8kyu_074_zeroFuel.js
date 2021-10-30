// 문제
// 차가 갤런 당 약 25마일을 달린다.
// 이러한 요소를 고려해서, 펌프에 도달할 수 있는지 확인한다.

function zeroFuel(distanceToPump, milesPerGallon, fuelLeft) {

  // 플이1
  return distanceToPump / milesPerGallon <= fuelLeft
}

zeroFuel(50, 25, 2); // true
zeroFuel(50, 25, 1); // false
