원시타입인 string, number, boolean 각각 그냥 표현한다.

### 배열

[1,2,3] => number[] || Array<number>
["1","2","3"] => string[] Array<string>

### any

타입 검사 오류 발생 원하지 않을때 ㅋ\

### 함수

```typescript
// 매개변수 타입 표기
const a = (name: string) => {
  console.log(name.toUpperCase());
};

// 반환 타입 표기
const a = (): number => {
  return 26;
};
```

알잘딱도 가능함

```typescript
const names = ["Alice", "Bob", "Eve"];

nemes.foreach((s) => {
  // s는 자동으로 string으로 타입이 부여됨.
});
```

### 객체 타입

```typescript
function printCoord(pt: { x: number; y: number }) {
  console.log("x value is " + pt.x);
  console.log("y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

### 옵셔널

```typescript
const a = (obj: { first: string; last?: string }) => {
  console.log(obj.last?.toUpperCase());
};

a({ first: "Bob" });
a({ first: "Alice", last: "Alisson" });
```

### 유니언 타입

```typescript
const a = (id: number | string) => {
  id.toUpperCase(); // 이거 에러임.. 따라서 if(typeof id==="string) {으로 조져줘야함}
};

a(1000);
a("dsflng");
```

### Type aliases

```typescript
type Point = {
  x: number;
  y: number;
};

const a = (pt: Point) => {
  ~
}

a({x: 100, y: 100})
```
