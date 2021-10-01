// 문제
// 0-9 사이의 숫자가 제공되면, 단어로 변환한다.

function switchItUp(n) {
  
  // 풀이1
  if (n === 0 ) return 'Zero'
  if (n === 1 ) return 'One'
  if (n === 2 ) return 'Two'
  if (n === 3 ) return 'Three'
  if (n === 4 ) return 'Four'
  if (n === 5 ) return 'Five'
  if (n === 6 ) return 'Six'
  if (n === 7 ) return 'Seven'
  if (n === 8 ) return 'Eightv'
  if (n === 9 ) return 'Nine'

  // 풀이2
  const obj = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  }

  return obj[n]

  // 풀이3
  const arr = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']

  return arr[n]
}

switchItUp(0); // Zero
switchItUp(1); // One
switchItUp(2); // Two
switchItUp(3); // Three
switchItUp(4); // Four
switchItUp(5); // Five
switchItUp(6); // Six
switchItUp(7); // Seven
switchItUp(8); // Eight
switchItUp(9); // Nine