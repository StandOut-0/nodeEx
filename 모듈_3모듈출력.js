const { odd, even } = require('./모듈_1모듈이란');
const checkNumber = require('./모듈_2변수,함수의 모듈화');

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
