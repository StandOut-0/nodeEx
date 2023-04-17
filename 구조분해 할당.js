//구조분해 할당

//count를 구하려면 candyMachine부터 시작해 속성을 찾아 들어가야 한다.
var candyMachine1 = {
    status: {
        name: 'node',
        count1: 5,
    },
    getCandy1: function () {
        this.status.count1--;
        return this.status.count1;
    },
};
var getCandy1 = candyMachine1.getCandy1;
var count1 = candyMachine1.status.count1;
console.log(count1);
console.log("-------------------------");


//const{변수} = 객체
//객체 안의 속성을 변수명으로 사용 가능하다.
const candyMachine2 = {
    status: {
        name: 'node',
        count2: 5,
    },
    getCandy2() {
        this.status.count2--;
        return this.status.count2;
    },
};
const { getCandy2, status: { count2 } } = candyMachine2;
console.log(count2);


console.log("-------------------------");
//단, getCandy를 실행했을때 결과는 달라진다.

candyMachine1.getCandy1();
var count1_1 = candyMachine1.status.count1;
console.log(count1_1);

candyMachine2.getCandy2();
//   const { getCandy2, status: { count2 } } = candyMachine2;
console.log(count2);
