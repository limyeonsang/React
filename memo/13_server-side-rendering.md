서버 사이드 렌더링은 UI를 서버에서 렌더링하는 것이다. \
클라이언트 사이드 렌더링은 UI 렌더링을 브라우저에서 모두 처리하는 것이다.

클사렌에서는 JS가 실행되고 리액트 컴포넌트가 렌더링되면서 우리에게 보이고 \
서사렌에선 사용자가 웹에 방문했을 때 서버 쪽에서 초기 렌더링을 대신해준다. 그리고 사용자가 html을 전달받을 때 그 내부에 렌더링된 결과물이 보인다.

## 서버 사아드 렌더링 장점

1. 검색엔진이 페이지의 내용을 제대로 수집해갈 수 있음.(검색엔진 최적화 ㄱㄴ) -> 리액트로 만든 SPA는 검색 엔진 크롤러 봇 마냥 JS가 실행되지 않으면 페이지가 잘 나타나지 않음 따라서 서버에서 대신 렌더링시 가능
2. 초기 렌더링 성능 개선 가능: 서버 사이드 렌더링의 경우 JS 로딩이 완료되지 않은 시점에서도 html상에 사용자가 볼 수 있는 콘텐츠가 있기에 대기 시간이 최소화됨

## 단점

1. 브라우저가 해줄 일을 서버가 하므로 서버 리소스가 사용됨 -> 사용자가 많으면 과부화가 올 수 있기에 캐싱, 로드 밸런싱으로 성능 최적화 필요.
2. 프젝 구조가 복잡해짐, 데이터 미리 불러오기, 코드 스플리팅과의 호환 등 고려 -> 코딩 빡새짐.

### 서버 사이드 렌더링과 코드 스플리팅 충돌

호환 작업이 필요함 안그러면 아래와 같은 과정으로 페이지 깜빡거림이 발생함.

1. 서버 사이드 렌더링된 결과물이 브라우저에 나타남
2. JS 파일 로딩 시작
3. JS가 실행되며 아직 불러오지 않은 컴포넌트를 null로 렌더링
4. 페이지에서 코드 스플리팅된 컴포넌트들이 사라짐.
5. 코드 스플리팅된 컴포넌트들이 로딩된 이후 제대로 나타남

이슈해결을 위해선 -> 라우트 경로마다 코드 스플리팅된 파일 중 필요한 모든 파일을 브라우저에서 렌더링하기 전에 불러와야함.

## 구현해보자

서버 사이드 렌더링 구현을 위해선 웹팩 설정을 커스텀해야함 \
CRA 프젝은 웹팩 관련 설정이 숨겨져 있어서 `yarn eject`으로 꺼내야함

### 엔트리

entry는 웹팩에서 프젝을 불러올 때 가장 먼저 불어로는 파일임 \CRA에선 index.js려나 이 파일에서부터 다른 컴포넌트와 모듈을 불러오니까~

서버 사이드 렌더링시 서버를 위한 엔트리 파일이 있어야함

```javascript
// index.server.js
import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(<div>Hi server side rendering</div>);

console.log(html);
```

서버에서 리액트 컴포넌트를 렌더링할 시 ReactDOMServer의 renderToString 함수를 사용. 이 함수에 JSX를 넣어 호출시 렌더링 결과를 문자열로 반환.

이 엔트리 파일을 웹팩으로 불러와서 빌드할라믄 서버 전용 환경 설정을 만들어 줘야함

config/path.js에서 module.exports부분에 아래를 추가.

```javascript
  ssrIndexJs: resolveApp('src/index.srver.js'),
  ssrBuild: resolveApp('dist')
```

ssrIndexJs는 불러올 파일의 경로, ssrBuild는 웹팩으로 처리한 뒤 결과물을 저장할 경로임.

#### 이제 웹팩 환경 설정 파일을 작성.

```javascript
// config/webpack.config.server.js
const paths = require("./paths");

module.exports = {
  mode: "production",
  entry: paths.ssrIndexJs, // 엔트리 경로
  target: "node", // node 환경에서 실행함을 명시
  output: {
    path: paths.ssrBuild, // 빌드 경로
    filename: "server.js", // 파일 이름
    chunkFilename: "js/[name].chunk.js",
    publicPath: paths.servedPath, // 정적 파일 제공될 경로
  },
};
```

빌드할 때 어떤 파일에서부터 다른 파일들을 불러올지, 어디에 결과를 저장할지 정해줌.

#### 이번엔 로더를 설정

로더는 파일을 불러올 때 확장자에 맞게 필요한 처리를 해줌 \

- js: babel로 트랜스파일링
- css: 모든 css를 결합 -> 난 style components쓰니까 버릴게~
- 이미지 파일: 파일을 다른 경로에 따로 저장하고 그 파일에 대한 경로를 js에서 참조할 수 있게 해줌
