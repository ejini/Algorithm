// 문제
// 이름이 R 또는 r로 시작한다면, name + ‘plays banjo’를 반환한다.
// 그렇지 않으면, name + ‘does not play banjo’를 반환한다.

function areYouPlaying(name) {

  // 풀이1
  return name[0] === 'R' || name[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
}

areYouPlaying('Sam'); // Sam does not play banjo
areYouPlaying('Ralph'); // Ralph plays banjo
areYouPlaying('ralph'); // Ralph plays banjo
