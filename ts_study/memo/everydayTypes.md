원시타입인 string, number, boolean 각각 그냥 표현한다.

### 배열

[1,2,3] => number[] || Array<number>
["1","2","3"] => string[] Array<string>

### any

타입 검사 오류 발생 원하지 않을때\

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

### 인터페이스

```typescript
interface Point {
  x: number;
  y: number;
}

const a = (pt: Point) => {
  ~
}

a({x: 100, y: 100})
```

#### 타입 alias랑 interface의 차이

둘이 매우 유사, 둘 중 하나 쓰면됨. \
핵심적인 차이는 interface는 확장이 가능하다는 점.

```typescript
// 인터페이스 확장
interface Animal {
  name: string;
}

interface Bear extends Animal {
  food: boolean;
}

// 기존의 인터페이스에 새 필드 추가
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}
```

ref: https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html
