
//ES2015 이전에는 var로 변수를 선언했다.
//ES2015부터는 const와 let이 대체
//var는 함수스코프, const와 let은 블록스코프인점이 차이

if (true) {
    var x = 3;
}
console.log(x); // 3

if (true) {
    const y = 3;
    console.log(y);
}
// console.log(y);

if (true) {
    let z = 5;
    console.log(z);
}
// console.log(z);

