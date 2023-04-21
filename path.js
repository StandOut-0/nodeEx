//path
//폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
const path = require('path');
const string = __filename;

//경로 구분자 확인하기, Windows는 \, POSIX는 /
console.log('path.sep:', path.sep);

//운영체제에서 사용 가능한 실행 파일들이 위치한 디렉토리 경로들을 구분하여 저장
console.log(process.env.PATH);

//환경변수 구분자 확인하기, Windows는 세미콜론(;)이고 POSIX는 콜론(:)
console.log('path.delimiter:', path.delimiter);

//파일이 위피한 폴더 경로 확인
console.log('\n'+"파일이 위치한 폴더 경로 확인");
console.log('path.dirname():', path.dirname(string));

//파일 확장자확인
console.log('path.extname():', path.extname(string));

//파일이름+확장자 
console.log('path.basename():', path.basename(string));

//파일이름 확인
//파일이름만 확인하고 싶다면 basename의 두번째 인자로 파일 확장자를 넣음.
console.log("\n"+"파일이름")
console.log('path.basename - extname:', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));

//파일경로를 root, dir, base, ext, name으로 분리하여 보여줌
console.log('\n'+"파일경로 각 영역별로 쪼개서 확인하기");
console.log('path.parse()', path.parse(string));

//경로를 합쳐보여줌
console.log('\n');
console.log('path.format():', path.format({
  dir: 'C:\\users\\zerocho',
  name: 'path',
  ext: '.js',
}));

// (/나 \ )슬레시를 실수로 여러번 사용하는등의 오류를 정상적인 경로로 변환해줌
console.log('\n'+"실수보완");
console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js'));

//파일경로가 절대경로인지 상대경로인지 알려줌
//true: 절대경로, false: 상대경로
console.log('\n');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));

//첫번째 경로에서 두번째 경로로 가는 방법을 알려줌
console.log('\n');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));

//여러인자를 넣으면 하나의 경로로 합쳐줌, 상대경로로 처리
console.log('\n');
console.log('path.join():', path.join('..', '..', '/users', '.', '/zerocho'));

//여러인자를 넣으면 하나의 경로로 합쳐줌, 절대경로로 처리
console.log('\n');
console.log('path.resolve():', path.resolve('..', '..', '/users', '.', '/zerocho'));
