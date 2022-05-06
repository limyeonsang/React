### 배열 요소 확장에 사용.

```typescript
let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5];
```

### 배열 비구조화에 사용

`let [first, ...second] = [1,2,3]` \
second는 [2,3]임

## 객체에서

```typescript
let obj = { c: 3, d: 4 };
let obj2 = { a: 1, b: 2, ...obj };
// obj2 -> {a:1, b:2, c:3, d:4}

let numG = { n1: 1, n2: 2, n3: 3 };
let { n2, ...n1n3 } = numG;
// n2 = 2 / n1n3 = {n1:1, n3:3}
```
