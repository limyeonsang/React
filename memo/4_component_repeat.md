## 배열에 map

array.map(callback, [thisArg])

- callback 파라미터
  - currentValue: 현재 처리하는 요소
  - index: 현재 처리하는 index
  - array: 현재 처리하는 원본 배열
- thisArg: callback 내부에서 사용할 this 레퍼런스

### Data 배열 to 컴포넌트 배열

```javascript
const Iteration = () => {
  const names = ["snowman", "ice", "snow", "wind"];
  const nameList = names.map((name) => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default Iteration;
```

렌더링은 된다. 하지만 개발자 도구 콘솔을 보면

( react-refresh-runtime.development.js:697 Warning: Each child in a list should have a unique "key" prop. )

위와 같은 에러가 발생한다. key prop이 없다고 하누

### KEY

Key는 컴포넌트 배열을 렌더링시 어떤 원소에 변동이 있었는지 알아내기 위해 사용함

- key 값 설정: map 함수의 인자로 전달되는 함수 내부에서 props 설정하듯이 설정하면됨

```javascript
const Iteration = () => {
  const names = ["snowman", "ice", "snow", "wind"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};
```

고유값이 없을 때에는 어쩔 수 없이 인덱스를 key로 사용하자

## 불변성 유지
리액트에서는 상태를 업데이트할 때 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야함

불변성 유지를 해줘야 리액트 컴포넌트의 성능 최적화가 가능

ex) 배열의 push대신 concat으로 새로운 배열을 만들어서 업데이트

