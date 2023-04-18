function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender: 'm' });
        })
        .then((user) => {
        })
        .catch(err => {
            console.error(err);
        });
}


//async/await 문법 + async function의 도입하여 코드축약이 가능하다.
//변수 = await 프로미스;
//프로미스가 resolve된 값이 변수에 저장

//변수 await 값;
//그 값이 변수에 저장

//에러처리를 위해 tryCatch로 감싸줬다.
async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
    } catch (error) {
        console.error(error);
    }
}
// Async 함수는 항상 promise를 반환(return)하기때문에 then이나 await을 붙일 수 있다.
findAndSaveUser().then(() => {});


//화살표함수도 async/await문법적용이 가능하다.
const findAndSaveUser = async (Users) => {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
        // 생략
    } catch (error) {
        console.error(error);
    }
};