### named, anonymous

named function은 이름을 명시해 선언, 호출시 호이스팅이 발생 -> 함수 선언 전에도 호출 가능\

anonymous function은 이를 할당한 이후에나 호출이 가능하다. \
`let resultMultiple = function (a, b) {return a*b}`

## ts type 지정

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
