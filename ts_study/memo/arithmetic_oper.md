## Destructuring

### 객체

비구조화 할당.

```typescript
// basic
let { id, name } = { id: 1, name: "ys" };

// initial
let { id, name = "ys" } = { id: 1 };

// new name
let { id: newId, name: newName } = { id: 1, name: "ys" };
console.log(newId); //1
```

비구조화 매개변수

```typescript
const a = ({ id, name = "?" }) => {
  console.log(id); // 1
  console.log(name); // ?`
};

a({ id: 1 });
```

type 키워드 활용

```typescript
type C = { a: string; b?: number }; // 선택연산자인 ?로 선언했으므로 생략 가능 -> undefined
function price({ a, b }: C): void {
  console.log(a, b);
}

price({ a: "apple", b: 1000 });
price({ a: "apple" });
```

### 배열

```typescript
let nums = [1, 2, 3, 4, 5];

let [num1, num2] = nums;
let [, , num3, num4];
let [num4, num3] = [num3, num4];
```

매개변수로써

```typescript
function f([first, second]: [number, string]) {
  ~
}

f([100, 'hello'])
```
