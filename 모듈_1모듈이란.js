//module
//module은 특정한 기능을 하는 함수나 변수들의 집합.
//모듈로 만들어 놓은 코드는 여러 프로그램에서 재사용이 가능하다.

const odd = '홀수입니다';
const even = '짝수입니다';

//module.exports로 모듈로 만들 값을 지정했다.
module.exports = {
  odd,
  even,
};
