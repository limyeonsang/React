/src/index.js

```javascript
const Koa = require("koa");

const app = new Koa();

app.use((ctx) => {
  ctx.body = "hello";
});

app.listen(4000, () => {
  console.log("listening to 4000 port");
});
```

서버 포트 4000을 열고, 접속시 hello 텍스트를 반환

`node src`입력 후 실행.

### 미들웨어

Koa는 미들웨어의 배열로 구성됨.\
`app.use`는 미들웨어 함수를 앱에 등록함. koa의 미들웨어 함수는 ctx와 next를 받는다.

ctx(Context): 웹 요청과 응답에 관한 정보

next: 현재 처리 중인 미들웨어의 다음 미들웨어를 호출.

미들웨어는 app.use를 써서 등록하는 순서대로 처리됨

next 함수는 Promise를 반환함, async await 똑같이 사용 ㄱㄴ.

## nodemon으로 자동실행~~

`yarn add --dev nodemon`깔고~\
package.json에서~

```json
  "scripts": {
    "start": "node src",
    "start:dev": "nodemon --watch src/ src/index.js"
  }
```

요것 들들들 추가들들하면
`yarn start`로 재시작 없이 실행\
`yarn start:dev`로 자동 재시작~
