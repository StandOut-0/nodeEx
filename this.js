
//this
//'최상위 스코프'의 this는 module.exports를 가리킴.
console.log(this);
console.log(this === module.exports);
console.log(this === exports);

//외 다른 사용에서는 브라우저 자바스크립트와 동일함.
function whatIsThis() {
  console.log('function', this === exports, this === global);
}
whatIsThis();
