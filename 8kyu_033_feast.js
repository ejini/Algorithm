// 문제
// 각 동물들이 파티에 음식을 가져온다.
// 음식의 이름이 동물의 이름과 같은 문자로 시작하고 끝나면 true, 그렇지 않으면 false를 반환한다.

function feast(beast, dish) {

  // 풀이1
  return (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) ? true : false

  // 풀이2
  return (beast.substr(0, 1) === dish.substr(0, 1)) && (beast.substr(beast.length -1, 1) === dish.substr(dish.length -1, 1)) ? true : false

  // 풀이3
  return (beast.substring(0, 1) === dish.substring(0, 1)) && (beast.substring(beast.length -1, beast.length) === dish.substring(dish.length -1, dish.length)) ? true : false

  // 풀이4
  return (beast.slice(0, 1) === dish.slice(0, 1)) && (beast.slice(beast.length -1, beast.length) === dish.slice(dish.length -1, dish.length)) ? true : false

  // 풀이5
  return (dish.indexOf(beast[0]) === 0) && (dish.lastIndexOf(beast[beast.length -1]) === dish.length -1) ? true : false

  // 풀이6
  return (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length -1) === dish.charAt(dish.length -1)) ? true : false
}

feast('panda', 'potato pizza'); // true
feast('panda', 'hawaiian pizza'); // false
feast('chicken', 'cold chicken'); // true
feast('chicken', 'hot chicken'); // false
feast('chicken', 'cot chickee'); // false