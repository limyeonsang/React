## for in

python의 for in 마냥 넣되, 인덱스를 가져옴\
객체는 key

## for of

ㄹㅇ 파이썬 for in 문법 ㅎㅎ 신난다.\
문자열 "hi"에선 for of 시 "h", "i"를 가져옴 \

## Map, Set

### Map

```typescript
let mapMap = new Map([
  ["one", 1],
  ["one", 2],
]);

for (let entry of mapMap) {
  console.log(entry);
}

console.log(mapMap.get("one"));

mapMap.set("one", 3);
console.log(mapMap.get("one"));

// 출력결과
// ["one", 3]
// 2
// 3
```

Map은 키 중복을 허용하지 않음. 따라서 마지막이 나옴

### Set

어떤 타입의 값이든 유일한 값을 저장할 수 있음.

```typescript
let setSet = new Set(["a", "b", "c", "a"]);

for (let value of setSet) {
  console.log(value);
}

// a b c
```

## \[Symbol.iterator]()

generator임

```typescript
let arr = [1, 2];
let itObj = arr[Symbol.iterator]();

console.log(itObj.next()); // {value: 1, done: false}
console.log(itObj.next()); // {value: 2, done: false}
console.log(itObj.next()); // {value: undefined, done: true}
```
