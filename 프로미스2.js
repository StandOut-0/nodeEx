//프로미스
//콜백 헬이라고 불리는 지저분한 자바스크립트 코드의 해결책

//Promise.resolve(성공리턴값): 바로 resolve하는 프로미스
//Promise.reject(실패리턴값): 바로 reject하는 프로미스
//Promise.all(배열): 여러 개의 프로미스를 동시에 실행

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
// const promise2 = Promise.reject('실패1');
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  //하나라도 실패하면 catch
  .catch((error) => {
    console.error(error);
  });

  