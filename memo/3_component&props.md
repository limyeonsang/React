컴포넌트를 선언하는 방식은 함수형, 클래스형이 있다.

- 함수형 컴포넌트

```javascript
import React from "react";

function App() {
  // App이라는 컴포넌트임 -> 함수형 컴포넌트
  const name = "react";
  return <div className="react">{name}</div>;
}
```

- 클래스형 컴포넌트

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}
```

역할은 둘이 같지만, 클래스형은 state, 라이프사이클 api 사용이 가능하다.

또한 클래스형은 render()가 꼭 있어야하며, 그 안에서 보여줘야할 JSX를 반환해야 한다.

> 리액트 공식문서는 컴포넌트 작성시 함수형 컴포넌트에 Hooks를 사용해 state, 라이프사이클 api를 사용하도록 권장한다.

## Props

컴포넌트 속성을 설정할 떄 사용하는 요소.

- 컴포넌트를 사용할 때 props 값 지정

```javascript
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent name="안녕" />;
};

export default App;
```

- JSX 내부에서 props 렌더링 (MyComponent.js)

```javascript
const MyComponent = (props) => {
  return <div>adsfgsa {props.name} fsfgsg</div>;
};

export default MyComponent;
```

- props 기본값 (MyComponent.js)

```javascript
MyComponent.defaultProps = {
  name: "Default Name",
};
```

- children
  태그 사이의 내용을 보여줌

App.js

```javascript
const App = () => {
  return <MyComponent>안녕 나는 차일드야~</MyComponent>;
};
```

MyComponent.js

```javascript
const MyComponent = (props) => {
  return <div>children is: {props.children}</div>;
};
```

### 비구조화 할당

객체에서 값을 추출하는 문법을 비구조화 할당이라고 한다. \
`const {name, children} = props`로 비구조화 할당해서 `name` `props.name`과 같은 효과를 낸다.

파라미터에서 받을 떄도 사용할 수 있음
`const MyComponent = ({name, children}) => { ~~ }`

### propTypes

props의 타입 지정, 필수 props를 지정할 떄 사용

```javascript
import PropTypes from "prop-types";

// ~

MyComponent.propTypes = {
    name: PropTypes.string // 타입 지정
    number: PropTypes.number.isRequired // 필수 props로 지정
}
```


