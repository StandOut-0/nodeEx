//console객체
//브라우저의 console객체와 매우 유사하다.

// console.log: 평범한 로그
const string = 'abc';
const number = 1;
const boolean = true;
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.log(string, number, boolean);


// console.dir: 객체 로깅
//Node.js 환경에서는 console.dir() 메서드를 사용할 수 있지만, 
//대화형 디버거는 내장되어 있지 않기 때문에, "사용 가능한 디버거가 없다"는 에러 메시지가 출력됩니다.
const obj = {
    outside: {
      inside: {
        key: 'value',
      },
    },
  };
console.dir(obj);


//console.table: 테이블형 콘솔
console.table([{ name: '제로', birth: 1994 }, { name: 'hero', birth: 1988}]);


// console.time, console.timeEnd: 시간 로깅
console.time('시간측정');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간측정');




// console.error: 에러 로깅
console.error('에러 메시지는 console.error에 담아주세요');


// console.trace: 호출스택 로깅
function b() {
    console.trace('에러 위치 추적');
  }
  function a() {b();}
  a();