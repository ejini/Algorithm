// 문제
// 미어캣이 올바른 방향(머리, 몸통, 꼬리)이 되도록 재배열한다.

function fixTheMeerkat(arr) {
  
  // 풀이1
  const meerkat = {
    '1' : 'head',
    '2' : 'body',
    '3' : 'tail'
  }

  let result = new Array(arr.length)

  for (let i = 0; i < arr.length; i++) {
    result[i] = meerkat[i + 1]
  }

  return result

  // 풀이2
  const meerkat = {
    '1' : 'head',
    '2' : 'body',
    '3' : 'tail'
  }

  const result = []

  arr.map((i, index) => result[index] = meerkat[index + 1])

  return result

  // 풀이3
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'head') result[0] = arr[i]
    else if (arr[i] === 'body') result[1] = arr[i]
    else if (arr[i] === 'tail') result[2] = arr[i]
  }

  return result
}

fixTheMeerkat(['tail', 'body', 'head']); // ['head', 'body', 'tail']
