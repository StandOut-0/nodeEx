//module
//module은 특정한 기능을 하는 함수나 변수들의 집합.
//모듈로 만들어 놓은 코드는 여러 프로그램에서 재사용이 가능하다.

const odd = '홀수입니다';
const even = '짝수입니다';

//순환참조주의, 순환 의존성(circular dependency)
//만약 이 두 파일이 서로를 require하는 경우, 무한반복을 막기 위해 순환 참조대상이 빈객체가 됨.
//속성에 엑세스 하려고 하지만 속성이 존재하지않아 오류가 발생
const checkNumber = require('./모듈_2변수,함수의 모듈화');

//module.exports로 모듈로 만들 값을 지정했다.
module.exports = {
  odd,
  even,
};
