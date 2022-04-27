리액트 프젝을 빌드시 웹팩이 파일 크기를 최소화하고, 코드의 트랜스파일 작업, 이미지 같은 정적 파일 경로도 설정한다. \
웹팩은 디폴트로 모든 js파일을 하나의 파일로 모든css 파일도 하나의 파일로 합친다.

CRA로 프젝을 빌드할 경우, 두 개 이상의 js 파일이 생성되며, CRA의 기본 웹팩 설정에는 SplitChunks라는 기능이 적용되어 node_modules에서 불러온 파일, 일정 크기 이상의 파일, 여러 파일 간 공유된 파일을 분리시켜 캐싱의 효과를 볼 수 있게함.

`yarn build` \
build/ 디렉토리가 생성되며 build/static에는 js 파일이 여러개 들어가있다.

이렇게 파일을 분리하는 작업이 코드 스플리팅임.\
SplitChunks를 통한 코드 스플리팅은 단순 효율적인 캐싱 효과만 있다.

예를 들어 페이지 A,B,C로 이뤄진 SPA에서 페이지 A에 방문시 BC의 컴포넌트는 필요가 없다. \
하지만 CRA에서 별도로 설정을 안하면 A,B,C 컴포넌트에 대한 코드가 모두 한 파일에 저장되며, 당장 필요하지 않은 컴포넌트까지 불러오며 로딩이 오래걸리며 트래픽 증가함.

이를 해결하기 위해 코드 스플리팅 기법 중, 코드 비동기 로딩을 해야함. 필요할 떄만 불러서 가져옴.

## Code Splitting -> https://reactjs.org/docs/code-splitting.html

Code Splitting은 런타임에 동적으로 여러 번들을 로드할 수 있는 Webpack과 같은 번들러에서 지원하는 기능임.

### import

code splitting을 적용하기엔 import가 가장 좋다네요

```javascript
import { add } from "./math";

console.log(add(16, 26));
```

TO

```javascript
import("./math").then((math) => {
  console.log(math.add(16, 26));
});
```

웹팩이 이 구문을 만나면 자동으로 code splitting을 실행.

### React.lazy

`import OtherComponent from './OtherComponent';`

To

`const OtherComponent = React.lazy(() => import('./OtherComponent')); `

이 componenet가 처음 렌더링될 떄, OhterComponent를 포함한 번들을 자동으로 로드함.
