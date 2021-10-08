// 문제
// 밀리초로 변환된 시간을 반환한다.

// 1h = 60m = 3600s = 3600000ms

function convertToMilliseconds(h, m, s) {

  // 풀이1
  const arr = [h, m, s]
  const ms = [3600000, 60000, 1000]
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result += (arr[i] * ms[i])
    }
  }

  return result

  // 풀이2
  const arr = [h, m, s]
  const ms = [3600000, 60000, 1000]

  return arr.reduce((result, i, index) => i ? result + (ms[index] * i) : result ,0)
}

convertToMilliseconds(0, 0, 1); // 1000
convertToMilliseconds(0, 1, 0); // 60000
convertToMilliseconds(1, 0, 0); // 3600000
convertToMilliseconds(2, 1, 1); // 3661000
