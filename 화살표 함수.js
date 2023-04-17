//화살표함수
//function함수를 화살표함수로 표현할 수 있다.

function add1(x, y) {
    return console.log(x + y);
}
const add2 = (x, y) => {
    return console.log(x + y);
};
add1(1,2);
add2(1,2);
console.log("-------------------------");

//함수의 본문이 return만 있다면 return을 생략할 수 있다.
const add3 = (x, y) => console.log(x + y);
add3(1,2);
console.log("-------------------------");

//매개변수가 하나라면 괄호를 생략할 수 있다. (x) -> x 
function not1(x) { return console.log(!x);}
const not2 = x => console.log(!x);
not1(1);
not2(1);
console.log("-------------------------");



//화살표함수는 function(){}을 대체하는것은 아니다.
//아래의 실행결과로 그 사실을 확인해보자.

//화살표함수, name값 zero와 friends를 각각 출력했다.
const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();
console.log("-------------------------");

//해당 화살표 함수를 function(){}로 바꾸어 출력해보자. 
//this로는 name 값을 잡지못한다, undefined
var relationship0 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        this.friends.forEach(function (friend) {
            console.log(this.name, friend);
        });
    },
};
relationship0.logFriends();
console.log("-------------------------");


//this를 that이란 중간변수를 이용해서 전달해야 가능하다, zero
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        var that = this;
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();