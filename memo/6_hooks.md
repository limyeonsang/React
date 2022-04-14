## Hooks

### useState

파라미터에는 기본값을 전달. 배열을 리턴하는데, 배열의 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수임 상태 설정 함수에 파라미터를 넣어 호출하면 상태 값이 바뀜

### useEffect

컴포넌트가 렌더링될 떄마다 특정 작업을 수행하도록 설정가능,

- 마운트될 때만 실행하려면 함수의 두 번째 파라미터로 빈 배열을 넣어 주면 됨
  ```javascript
  useEffect(() => {
    console.log("run on mount");
  }, []);
  ```
- 특정 값이 업데이트 될 때만 실행하려면 두 번째 파라미터 배열에 검사하고픈 값을 넣어주면 됨
  ```javascript
  useEffect(() => {
    console.log(name);
  }, [name]);
  ```
- cleanup: 컴포넌트가 언마운트 되기 전이나 업데이트 전에 작업을 수행하고 싶다면 cleanup함수를 반환해야함
  ```javascript
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  });
  ```

### useReducer

useState보다 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 하고 싶을 때 사용

reducer란 현재 상태와 action 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수
action은 업데이트를 위한 정보가 있으며 주로 type을 지닌 객체형태로 사용 type은 대문자와 \_ 로 구성함

useReducer: \
 `const [state, dispatch] = useReducer(reducer, 초기화);`
state는 컴포넌트에서 사용할 수 있는 상태, dispatch 액션 발생 함수

### useMemo
memorization은 기존에 수행한 연산의 결과값을 어딘가에 저장해두고 동일한 입력이 들어오면 재활용하는 기법을 말함 (연산 속도업, 메모리도 많이 먹음)

useMemo로 함수형 컴포넌트에 memorization 적용이 가능\
렌더링이 발생했을 때, 이전 렌더링과의 인자 값이 동일한 경우 기존 메모리에 저장해둔 값을 그대로 사용

useMemo 함수는 2개의 인자를 받음, 첫번쨰는 결과값을 생성해주는 함수, 두번쨰는 기존 결과값 재활용 여부의 기준이 되는 입력값 배열

```javascript
MyComponent = () => {
  const z = useMemo(() => compute(x, y), [x, y]);
  return <div>{z}</div>;
};
```

### useCallback
useMemo와 비슷, 렌더링 성능 최적화에 사용하며, 이벤트 핸들러 함수를 필요할 때만 생성할 수 있다. 