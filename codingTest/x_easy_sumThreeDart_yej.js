// 다트
// 다트 게임을 출시하기로 했다.
// 다트 게임은 다트 판에 다트를 세 차례 던져
// 그 점수의 합계로 실력을 겨루는 게임이다.
// 0~10의 정수와 문자 S, D, T, *, #으로 구성된 문자열이 주어진다.
// 3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.

// - 점수는 0에서 10 사이의 정수이다.
// - 보너스는 S(Single), D(Double), T(Triple) 중 하나이다.
// - 옵션은 *이나 # 중 하나이며, 없을 수도 있다.

// 다트 게임의 점수 계산 로직
// - 다트 게임은 총 3번의 기회로 구성
// - 각 기회마다 얻을 수 있는 점수는 0에서 10
// - Single(S), Double(D), Triple(T) 영역이 존재
// - 각 영역은 1제곱, 2제곱, 3제곱으로 계산
// - 옵션으로 스타상(*), 아차상(#)이 존재
// - 스타상(*)은 해당 점수와 바로 전에 얻은 점수를 각각 2배
// - 아차상(#)은 해당 점수 마이너스 (* (-1))
// - 스타상(*)이 첫 번째 기회에 나올 경우 해당 첫 번째 기회의 2배
// - 스타상(*)은 중첩될 수 있으므로, 이 경우 4배
// - 스타상(*)은 아차상(#)과 중첩될 수 있으므로, 이 경우 아차상(#)은 -2배
// - Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재
// - 스타상(*)과 아차상(#)은 점수마다 하나만 존재하거나 존재하지 않음

// 1
function dartScore(score) {    
    let num = score.replace(/[^0-9]/gi, ' ').split(' ').filter(el => {
        return el
    })

    let bonus = score.replace(/[^SDT]/gi, '').split('');

    let obj = []

    for (let i = 0; i < bonus.length; i++) {
        if (bonus[i] === 'S') {
            obj.push(num[i] ** 1)
        } else if (bonus[i] === 'D') {
            obj.push(num[i] ** 2)
        } else if (bonus[i] === 'T') {
            obj.push(num[i] ** 3)
        }
    }

    console.log(obj);

    for (let i = 0; i < score.length; i++) {
        if (score[i] === '*') {
            if (i <= 2) {
                obj[0] = obj[0] * 2
            } else if (i > 2 && i <= 5) {
                obj[0] = obj[0] * 2
                obj[1] = obj[1] * 2
            } else if (i > 5) {
                obj[1] = obj[1] * 2
                obj[2] = obj[2] * 2
            }   
        } else if (score[i] === '#') {
            if (i <= 2) {
                obj[0] = obj[0] * (-1)
            } else if (i > 2 && i <= 5) {
                obj[1] = obj[1] * (-1)
            } else if (i > 5) {
                obj[2] = obj[2] * (-1)
            }   
        }
    }

    return obj.reduce((result, i) => result + i, 0)
}

// *
// console.log(dartScore('3S*2D*1T*')) // 30 (3^1 * 2 * 2 + 2^2 * 2 * 2 + 1*3 * 2)
// console.log(dartScore('3S*2D*1T')) // 21 (3^1 * 2 * 2 + 2^2 * 2 + 1*3)
// console.log(dartScore('3S*2D1T*')) // 16 (3^1 * 2 + 2^2 * 2 + 1^3 * 2)
// console.log(dartScore('3S2D*1T*')) // 24 (3^1 * 2 + 2^2 * 2 * 2 + 1^3 * 2)

// // #
// console.log(dartScore('3S#2D#1T#')) // -8 (3^1 * (-1) + 2^2 * (-1) + 1^3 * (-1))
// console.log(dartScore('3S#2D#1T')) // -6 (3^1 * (-1) + 2^2 * (-1) + 1^3)
// console.log(dartScore('3S#2D1T#')) // 0 (3^1 * (-1) + 2^2 + 1^3 * (-1))
// console.log(dartScore('3S2D#1T#')) // -2 (3^1 + 2^2 * (-1) + 1^3 * (-1))

// // * & #
// console.log(dartScore('3S*2D#1T')) // 3 (3^1 * 2 + 2^2 * (-1) + 1^3)
// console.log(dartScore('3S#2D*1T')) // 3 (3^1 * (-1) * 2 + 2^2 * 2 + 1^3)
// console.log(dartScore('3S2D#1T*')) // -3 (3^1 + 2^2 * (-1) * 2 + 1^3 * 2)

// pure
// console.log(dartScore('3S2D1T')) // 8 (3^1 + 2^2 + 1^3)
// console.log(dartScore('1S2D3T')) // 32 (1^1 + 2^2 + 3^3)

// programmers
// console.log(dartScore('1S2D*3T')) // 37 (1^1 * 2 + 2^2 * 2 + 3^3)
// console.log(dartScore('1D2S#10S')) // 9 (1^2 + 2^1 * (-1) + 10^1)
// console.log(dartScore('1D2S0T')) // 3 (1^2 + 2^1 + 0^3)
// console.log(dartScore('1S*2T*3S')) // 23 (1^1 * 2 * 2 + 2^3 * 2 + 3^1)
// console.log(dartScore('1D#2S*3S')) // 5 (1^2 * (-1) * 2 + 2^1 * 2 + 3^1)
// console.log(dartScore('1T2D3D#')) // -4 (1^3 + 2^2 + 3^2 * (-1))
// console.log(dartScore('1D2S3T*')) // 59 (1^2 + 2^1 * 2 + 3^3 * 2)
