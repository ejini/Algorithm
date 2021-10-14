// 문제
// green, yellow, red, 다시 green으로 변화를 처리한다.

function updateLight(current) {

  // 풀이1
  const color = {
    'green': 'yellow',
    'yellow': 'red',
    'red': 'green',
  }

  return color[current]

  // 풀이2
  if (current === 'green') {
    return 'yellow'
  } else if (current === 'yellow') {
    return 'red'
  } else if (current === 'red') {
    return 'green'
  }

  // 풀이3
  switch(current) {
    case 'green': return 'yellow'
    case 'yellow': return 'red'
    case 'red': return 'green'
  }
}

updateLight('green'); // yellow
updateLight('yellow'); // red
updateLight('red'); // green
updateLight('green'); // yellow
