// 문제
// 가위바위보에서 승리한 플레이어를 반환한다.
// 비겼을 경우, Draw!를 반환한다.

function rockPaperScissors(p1, p2){

  // 풀이1
	if (p1 === p2) return 'Draw!'

  if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!'
  else if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!'
  else if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!'
  else return 'Player 2 won!'

	// 풀이2
	if (p1 === p2) return 'Draw!'

  const rules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
  }

  if (rules[p1] === p2) return 'Player 1 won!'
  else return 'Player 2 won!'
}

rockPaperScissors('rock', 'rock'); // Draw!
rockPaperScissors('scissors', 'rock'); // Player 2 won!
rockPaperScissors('paper', 'rock'); // Player 1 won!
rockPaperScissors('paper', 'paper'); // Draw!