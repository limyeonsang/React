callback은 또 다른 함수의 매개변수로 전달될 수 있는 함수임.

콜백 함수를 전달받는 함수는 콜백 보다 상위 처리를 담당하며 고차함수라고 부름. \
고차함수에서 인수로 콜백을 받는 경우 고차함수 실행이 끝나면 -> 후속 처리를 콜백이 담당. \
ex) setTimeout(()=> {}, 1000)

익명 함수와 같이 타입을 미리 지정해두고 사용하는 것이 가능.

```typescript
type CallbackType = (a: string) => void;

let callbackA: CallbackType = (a) => a;
```
