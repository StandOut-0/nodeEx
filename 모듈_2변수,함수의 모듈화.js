//require
//require로 해당 파일 경로의 모듈 내용을 가져올 수 있다.
//해당 경로에 있는 odd, even 변수 두개를 가져왔다. 각각에는 문자열이 들어있다. 
const { odd, even } = require('./모듈_1모듈이란');

//가져온 변수를 이용해 함수를 작성했다.
function checkOddOrEven(num) {
  if (num % 2) { // 홀수면 '홀수입니다'가 리턴
    return odd;
  }
  return even; // 짝수면 '짝수입니다'가 리턴
}

//위 function도 module.exports해보자.
module.exports = checkOddOrEven;