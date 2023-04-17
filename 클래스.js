//클래스
//프로토타입 문법을 깔끔하게 작성할 수 있는 Class 문법
//Constructor(생성자), Extends(상속) 등을 깔끔하게 처리
//코드가 그룹화되어 가독성이 향상

//Zero는 Human으로써, Human을 상속받아 출력된다.
var Human = function (type) { this.type = type || 'human'; };
Human.isHuman = function (human) { return human instanceof Human; }
Human.prototype.breathe = function () { console.log('h-a-a-a-m'); };

var Zero = function (type, firstName, lastName) {
    Human.apply(this, arguments); this.firstName = firstName; this.lastName = lastName;
};
Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero;
Zero.prototype.sayName = function () { console.log(this.firstName + ' ' + this.lastName); };

var oldZero = new Zero('human', 'Zero', 'Cho');
console.log(Human.isHuman(oldZero));
console.log("-------------------------");




class NewHuman {
    constructor(type = 'human') { this.type = type; }
    static isHuman(human) { return human instanceof NewHuman; }
    breathe() { alert('h-a-a-a-m'); }
}
class NewZero extends NewHuman {
    constructor(type, firstName, lastName) {
        super(type); this.firstName = firstName; this.lastName = lastName;
    }
    sayName() { super.breathe(); alert(`${this.firstName} ${this.lastName}`); }
}
const newZero = new NewZero('human', 'Zero', 'Cho');
console.log(NewHuman.isHuman(newZero));
