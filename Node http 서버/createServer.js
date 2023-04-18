// import { createServer } from 'http';
const http = require('http');

//createServer 서버만들기
//req 객체는 요청에 관한 정보
//res 객체는 응답에 관한 정보
//createServer((req, res) => {});

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');//write 응답 내용
  res.end('<p>Hello Server!</p>');//end 응답마무리
})
.listen(8080, () => { // 서버 연결
  console.log('8080번 포트에서 서버 대기 중입니다!');
});