객체의 구조가 깊어지면 불변성을 유지하며 업데이트하는 것이 힘들다.

```javascript
const object = {
  some: {
    deep: {
      inside: 3,
      array: [1, 2, 3],
    },
    bar: 1,
  },
  foo: 1,
};
```

some.deep.inside를 6으로 변경해보자

```javascript
let nextObject = {
  ...object,
  some: {
    ...object.some,
    deep: {
      ...object.some.deep,
      inside: 6,
    },
  },
};
```

값하나 추가할라고 코드길이가 이게뭐고..

