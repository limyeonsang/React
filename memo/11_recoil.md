## RecoilRoot

컴포넌트는 recoil state 사용을 위해 부모 트리 어딘가에 RecoilRoot를 지정해야한다.

root 컴포넌트가 굿임
`<RecoilRoot>~</RecoilRoot>`

### Atom

atom은 state를 나타낸다. \
atom은 어떤 컴포넌트에서 든지 읽고 쓰기가 가능하다. \
atom 값을 읽는 컴포넌트는 암시적으로 해당 atom에 subscribe되므로 atom update시 해당 atom에 subscribe되는 모든 구성 요소를 리렌더링해야한다.

```javascript
const textState = atom({
  key: "textState", // unique ID ,왠만해선 이름이랑 똑같이하더라
  default: "", // 초기화하는 값임
});
```

atom을 읽고 써야하는 component는 useRecoilState()를 사용해야한다.

```javascript
const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  ~
};
```

### Selector

Selector는 파생된 state 중 일부를 나타낸다. \
파생된 상태란 atom의 상태에서 파생된 데이터, 즉 atom의 상태에 의존하는 동적인 데이터이다. \
Selector는 atom의 상태에 대해 항상 동일한 값을 반환하는 순수함수임.
