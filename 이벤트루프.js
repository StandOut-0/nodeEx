//이벤트루프
//이벤트 발생(setTimeout 등) 시 
//호출할 콜백 함수들(위의 예제에서는 run)을 관리하고, 호출할 순서를 결정하는 역할

//호출스택에 쌓인 setTimeout()이 백드라운드에서 대기하다가 3초 뒤 태스크 큐로 이동해 실행됨.

//호출스택 

// 백그라운드
// 타이머나 I/O 작업 콜백, 이벤트 리스너들이 대기하는 공간. 
// 여러 작업이 동시에 실행될 수 있음

// 태스크 큐
// 이벤트 발생 후 호출되어야 할 콜백 함수들이 순서대로 기다리는 공간
function run(params) {
    console.log("3초 후 실행되었습니다.");
}
console.log("setTimeout 코드 전");
setTimeout(run, 3000);
console.log("setTimeout 코드 후");