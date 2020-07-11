// https://programmers.co.kr/learn/courses/30/lessons/12903
function solution(s) {
  let answer = '';
  if (s.length % 2 == 0) {
      answer = s[parseInt(s.length / 2) - 1] + s[parseInt(s.length / 2)];
  } else {
      answer = s[parseInt(s.length / 2)];
  }
  return answer;
}

// 삼항연산자 사용
function solution(s) {
  let answer = '';
  answer = s.length % 2 == 0 ? s[parseInt(s.length / 2) - 1] + s[parseInt(s.length / 2)] : s[parseInt(s.length / 2)];
  return answer;
}