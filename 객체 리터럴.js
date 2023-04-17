//객체 리터럴
//중괄호({})를 사용하여 객체를 정의하는 것
//속성:값으로 구분되어 나열되 객체를 생성할 수 있다.

//메서드일경우, :function을 붙이지않아도된다.
//변수+값 등의 동적속성명을 객체 속성명으로 사용가능 = 속성:값을 속성/값으로 축약이 가능하다.


var sayNode = function () { console.log('Node'); };
var es = 'ES';
var oldObject = {
    sayJS: function () {
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6); // Fantastic



const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
};
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic
