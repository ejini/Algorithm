// 문제
// 챔피언십에서 우리 팀의 점수를 계산한다.

// Rules:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// There are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function championshipPoints(games) {
  
  // 풀이1
  let score = 0

  for (let i = 0; i < games.length; i++) {
    let scoreArr = games[i].split(':')

    if (scoreArr[0] > scoreArr[1]) {
      score += 3
    } else if (scoreArr[0] = scoreArr[1]) {
      score += 1
    }
  }

  return score

  // 풀이2
  let result = 0

  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) result += 3
    if (games[i][0] < games[i][2]) result += 0
    if (games[i][0] === games[i][2]) result += 1
  }

  return result
}

championshipPoints(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']);  // 30
championshipPoints(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4']);  // 10