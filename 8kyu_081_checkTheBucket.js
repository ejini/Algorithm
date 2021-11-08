// 문제
// bucket에 gold가 있으면 true를 반환하고, 없으면 false를 반환한다.

function checkTheBucket(bucket) {

  // 풀이1
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] === 'gold') return true
  }

  return false

  // 풀이2
  return bucket.includes('gold')

  // 풀이3
  return (bucket.indexOf('gold') === -1) ? false : true
}

checkTheBucket(['stone', 'stone', 'stone', 'stone']); // false
checkTheBucket(['stone', 'stone', 'stone', 'gold']); // true
