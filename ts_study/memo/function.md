### named, anonymous

named function은 이름을 명시해 선언, 호출시 호이스팅이 발생 -> 함수 선언 전에도 호출 가능\

anonymous function은 이를 할당한 이후에나 호출이 가능하다. \
`let resultMultiple = function (a, b) {return a*b}`

## ts type 지정 - named

`function plus(x:number, y:number):number {~~}`

### 매개변수 초기화

`function plus(x:number, y:number=2):number {~~}`

### rest parameters

```typescript
function concat(a: string, ...restParameter: string[]) {
  return restParameter.join("");
}

concat("lksdfn", true, false); // 이렇게 왔을 떄 전부 string으로 합치는 경우를 방지하기 위해
// a:string, ...restParameter: string[]  string[]타입을 사용해야 하므로 러한 매개변수를 취함.
// 하나의 인수만 받을 경우 a로 ~~
```

### 선택 매개변수

전달할 매개변수를 0개 이상 1개 미만으로 할려면 사용해야함

```typescript
function sum(a:number, b?:number):number {
  return a+b
}

sum(1) // undefined 왜why b가 언디파인드니까~

// 이런 상황을 대비해서 매개변수 초기화를 해야함.
// 근데 선택 매개변수는 또 이전에 썼던 방식으로 초기화를 몬함
// 따라서 함수 내부에서 if문으로 처맇를 줘야함
if (b===undefined {} // 의 형식
```

### 오버로드

```typescript
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
  return a + b;
}
```

위와 같이 함수의 시그니처를 쌓는 방식으로 선언해야함. (any로 선언한 것을 가장 아래로)

## anonymouse

### 즉시호출 함수

익명 함수는 실행하기 위해 변수에 할당해야 함\
싫으면 즉시 호출 함수를 이용 `(x => { x; })(3)`

### 익명함수 타입선언

`let concat = function(str1:string, str2:string):string { return str1+str2 }`

익명 함수의 타입을 함수 타입으로 분리해 재활용

```typescript
type calcType = (a: number, b: number) => number;

let addCalc: calcType = (a, b) => a + b;
```

## 객체 리터럴 타입

this에 타입을 추가시켜, 객체 속성에 접근하게 하기. (interface)를 이용.

```typescript
interface PersonType {
  name: string;
  hello(this: PersonType, name2: string): string;
}

let typePerson: PersonType = {
  name: "hello",
  hello: function (this: PersonType, name2: string): string {
    return this.name + name2;
  },
};

typePerson.hello("World");
```
