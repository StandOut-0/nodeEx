//템플릿문자열 백틱 `
//문자열을 합칠 때 + 기호때문에 지저분한 코드를 보완
// ES2015부터는 ` (백틱) 사용 가능
// 백틱 문자열 안에 ${변수} 처럼 사용

var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';
console.log(string1); // 1 더하기 2는 '3'

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`;
console.log(string2); // 1 더하기 2는 '3'

