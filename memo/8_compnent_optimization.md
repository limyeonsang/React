1컴포넌트는 이와 같은 상황에서 리렌더링이 발생한다.

1. 자신이 전달받은 props가 변경될 떄
2. 자신의 state가 바뀔 떄
3. 부모 컴포넌트가 리렌더링될 때
4. forceUpdate 함수가 실행될 때

## React.memo를 쓰자

컴포넌트의 props가 바뀌지 않았다면 리렌더링하지 않도록 설정

컴포넌트를 만들고 감싸주면 끝. \
`export default React.memo(컴포넌트)`

## 함수 좀 그만 맹글어라잉

예시) \
todo list를 맹글 때, 성공체크, 삭제 함수가 최신의 todo배열을 참조한다. 즉 todo배열이 바뀔떄마다 함수가 새로 생성된다. 이를 막아보자.

### useState의 함수형 업데이트

setState에 값을 그대로 전달하는게 아니라 함수를 전달하는 거임. \

```javascript
const [value, setValue] = useState(0);

setValue(prev => prev + 1);
});
```
