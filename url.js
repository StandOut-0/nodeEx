//url모듈
//URL은 node 내장객체라 require할 필요없다.
const url = require('url');
const { URL } = url;

//URL생성자에 주소를 넣어 객체로 만들면 주소가 부분별로 정리된다.
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');

console.log('new URL():', myURL);

//URL확인하기
console.log('url.format():', url.format(myURL));

//부분별로 정리되는 url 확인해보기
console.log('\n');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedUrl);

//url 확인하기
console.log('url.format():', url.format(parsedUrl));
