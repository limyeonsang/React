## 점진적 타입 검사

ts와 python 등. \
컴파일 시간에 타입 검사를 수행하며, 필요에 따라 타입 선언의 생략을 허용 -> 생략시 암시적 형변환이 일어남.

```typescript
const a = (b) => {
  return b + 10;
};

a(2);
```

위와 같을 때, 매개변수 b에 타입 선언을 안했지만 js 컴파일러가 오류로 잡지 않음.

any 타입은 어떤 타입의 변수도 받아들임.

## 정적 타입 검사

자바, c++

## 동적 타입 검사

실행 시간에 타입 검사를 수행함. js

# ts의 타입 계층 구조

<img src="https://velog.velcdn.com/images%2Fwinbigcoms%2Fpost%2Fcbaf6cf0-a5cf-4254-907c-41ec7cbac718%2Fimage.png">

뭐든 받을 수 있는 any타입이 최상위 그 아래로

- 기본 타입

  - symbol \
    symbol()함수를 이용해 생성한 고유하고 수정 불가한 데이터 타입
  - enum \
    첫번쨰 요소에 숫자 0이 할당, 이후론 1씩 증가.

    ```typescript
    enum A {
      a,
      b,
      c,
      d,
    }
    let k: A = A.d;
    // k = 3
    ```

  - string literal \
    `type EvenType="keyup"|"mouseover"`과 같이 타입에 정의한 문자열만 할당 가능

- 객체 타입

  - array: `let items: number[] = [1,2,3]`
  - tuple: 배열 요소가 정해졌을 떄 요소별로 타입을 지정해둠.
    `let x: [string, number]`
