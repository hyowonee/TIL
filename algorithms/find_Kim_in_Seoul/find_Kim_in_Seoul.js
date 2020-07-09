// https://programmers.co.kr/learn/courses/30/lessons/12919
function solution(seoul) {
  let x = seoul.indexOf("Kim")
  let answer = '김서방은 ' + x + '에 있다';
  
  return answer;
}
// 이렇게 문자열 안에 변수를 넣는걸 String interpolation이라고 한다.
// $는 정해져있고 ''로 감싼 String만 가능하다.
function solution(seoul) {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}