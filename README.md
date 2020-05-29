# Node_Login_Test
 Node.js Passport Login System Tutorial

## Passport란?
>Passport는 인증 절차를 로직으로 편하게 작업할 수 있게 도와주는 Node.js 미들웨어임

### 시작
1. new repository 생성 (with GitHub Desktop)
2. npm init
```
npm init
```
3. dependencies install
```
npm i express ejs
npm i --save-dev nodemon dotenv
npm i bcrypt
npm i passport passport-local express-session express-flash
npm i method-override
```
4. package.json update
```
"devStart": "nodemon server.js
```
5. server.js 생성
6. 서버 기동 테스트
```
npm run devStart
```

### Passport 사용
`server.js`
```
const passport = require('passport') // passport 선언

// Strategy 설정, Strategy 성공 시 작업(세션에 유저정보 저장), 페이지 이동 시 작업(세션 유저정보 조회)
const initializePassport = require('./passport-config') 
initializePassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id),
)
app.use(passport.initialize()) // passport 구동
```

### Session 사용
```npm i express-session```

### Flash 사용
```npm i express-flash```

### Method-override 사용
```npm i method-override```
