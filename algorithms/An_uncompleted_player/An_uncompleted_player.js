// https://programmers.co.kr/learn/courses/30/lessons/42576
// filter는 O(n)이다
function solution(participant, completion) {
  let answer = '';
  participant.sort();
  completion.sort();
  completion.push('');
  for (let i = 0; i < participant.length; i++) {
      if (completion[i] !== participant[i]) {
          answer = participant[i];
          break;
      }
  }
  return answer;
}