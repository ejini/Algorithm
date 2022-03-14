// 신고 결과 받기
// 게시판 불량 이용자를 신고하고
// 처리 결과를 메일로 발송하는 시스템을 개발하려고 한다.

// 각 사용자는 한 번에 한 명의 사용자를 신고할 수 있다.
// 신고 횟수에 제한은 없다.
// 한 사용자를 여러 번 신고할 수 있지만,
// 동일한 사용자에 대한 신고 횟수는 1회로 처리한다.
// k번 이상 신고된 사용자는 이용이 정지되며,
// 해당 사용자를 신고한 모든 사용자에게 이 사실을 메일로 발송한다.

// idList: 전체 사용자 ID 목록
// report: 신고자 ID와 신고한 ID 목록
// k: 정지 기준 신고 횟수

// ex
// const arr1 = ['muzi', 'frodo', 'apeach', 'neo']
// const arr2 = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi']

// muzi: 1 / x / 메일 2회
// frodo: 2 / 정지 대상 / 메일 1회
// apeach: 0 / x / 메일 1회
// neo: 2 / 정지 대상 / x

function getReportResult(idList, report, k) {
  
  // 1) 중복 제거 및 2차원 배열로 변환
  const removedDupArr = [...new Set(report)].map(i => i.split(' '))
  console.log(removedDupArr)

  // 2) 신고 당한 횟수
  let count = new Map()
  for (let i = 0; i < removedDupArr.length; i++) {
    count.set(removedDupArr[i][1], count.get(removedDupArr[i][1]) + 1 || 1)
  }
  console.log(count)

  // 3) k번 이상 신고 당한 사용자를 신고한 사용자 리스트
  let count2 = new Map()
  for (let i = 0; i < removedDupArr.length; i++) {
    if (count.get(removedDupArr[i][1]) >= k) {
      count2.set(removedDupArr[i][0], count2.get(removedDupArr[i][0]) + 1 || 1)
    }
  }
  console.log(count2)

  return idList.map(i => count2.get(i) || 0)

}

console.log(
  getReportResult(
    ['Sam', 'Ralph', 'Leo', 'Coco'],
    ['Sam Ralph', 'Leo Ralph', 'Ralph Coco', 'Sam Coco', 'Leo Sam', 'Sam Ralph',],
    2
  )
) // [2,1,1,0]

console.log(
  getReportResult(
    ['Sam', 'Ralph'],
    ['Ralph Sam', 'Ralph Sam', 'Ralph Sam', 'Ralph Sam'],
    3
  )
) // [0,0]