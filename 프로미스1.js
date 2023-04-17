//프로미스
//콜백 헬이라고 불리는 지저분한 자바스크립트 코드의 해결책

//내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
const condition = true;
// const condition = false;
const promise = new Promise((resolve, reject) => {
    if (condition) { resolve('성공'); }
    else { reject('실패'); }
});
promise
    .then((message) => { console.log(message); })//Then을 붙이면 결과를 반환
    .catch((error) => { console.error(error); })//실패리턴값 catch로 연결
    .finally(() => { console.log('무조건'); });//finally 무조건 실행


//프로미스 체이닝
//then을 연달아 사용가능하다. return한 값이 다음 then으로 넘어가 실행됨.
promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })

    .catch((error) => {
        console.error(error);
    });
