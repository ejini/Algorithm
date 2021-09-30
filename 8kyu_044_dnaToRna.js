// 문제
// DNA는 생물학적 시스템의 기본 정보 저장 분자이다.
// RNA는 세포의 기본 전달 분자이다.
// RNA는 DNA와 화학 구조가 약간 다르며, Thymine(T)을 포함하지 않는다.
// RNA Thymine(T)은 다른 핵산 Uracil(U)로 대체된다.
// 주어진 문자열을 RNA로 변형한다.

function dnaToRna(dna) {
  
  // 풀이1
  const result = []

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') {
      result.push('U')
    } else {
      result.push(dna[i])
    }
  }

  return result.join('')

  // 풀이2
  return dna.split('').reduce((result, i) => i === 'T' ? result + 'U' : result + i, 0).slice(1)

  // 풀이3
  return dna.replace(/T/g, 'U')
}

dnaToRna('GCAT'); // GCAU
dnaToRna('TTTT'); // UUUU
