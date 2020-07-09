// https://programmers.co.kr/learn/courses/30/lessons/12922
function solution(n) {
  let x = '수', y = '박';
  let temp = '', answer = '';
  for (let i = 0 ; i < n ; i++) {
      if (i % 2 == 0) {
          temp = x;
      }
      else {
          temp = y;
      }
      answer += temp;
  }
  return answer;
}

// x랑 y는 변하지 않는 수, const로 선언하는게 더 좋다.
// if랑 else문은 붙여쓴다.
function solution(n) {
  const x = '수', y = '박';
  let temp = '', answer = '';
  for (let i = 0 ; i < n ; i++) {
      if (i % 2 == 0) {
          temp = x;
      } else {
          temp = y;
      }
      answer += temp;
  }
  return answer;
}

// 간소화
function solution(n) {
  let answer = '';
  for (let i = 0 ; i < n ; i++) {
      if (i % 2 == 0) {
        answer += '수';
      } else {
        answer += '박';
      }
  }
  return answer;
}

// 삼항연산자가 사용가능하다
function solution(n) {
  let answer = '';
  for (let i = 0 ; i < n ; i++) {
      answer += (i % 2 == 0) ? '수' : '박';
  }
  return answer;
}