// https://programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr)
{
    var answer = [];
    var temp = arr[0];
    answer.push(arr[0]);
    for (var i=1; i < arr.length; i++){
        if (arr[i] !== temp)  {
            answer.push(arr[i]);
        }
        temp = arr[i];
    }
    return answer;
}

// 간략화
function solution(arr) {
  var answer = [];
  answer.push(arr[0]);
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] != arr[i - 1]) {
          answer.push(arr[i]);
      }
  }
  return answer;
}

// var -> let
function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[i - 1]) {
          answer.push(arr[i]);
      }
  }
  return answer;
}

// 함수형으로 풀이
function solution(arr) {
  return arr.filter((x, index) => x != arr[index - 1]);
}