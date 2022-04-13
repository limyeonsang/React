## Bundle

## JSX
js에 xml을 합체

브라우저에서 실행하기 전 바벨을 사용하여 일반 자바스크립트 형태로 코드가 변환된다. 
```javascript
function App() {
	return (
      <h1>Hello, GodDaeHee!</h1>
    );
}

// 위 JSX를 바벨이 다음과 같이 자바스크립트로 해석
function App() {
	return React.createElement("h1", null, "Hello, GodDaeHee!");
}
```

### JSX 문법
요소 여러 개가 부모 요소 하나에 무조건 감싸져 있어야 한다. 
```javascript
import React from 'react' 

function App() {
    return (
        <h1>g</h1>
        <h2>g</h2>
    )
}
```
위는 에러임
\<div>로 감싸주면 안남

이 이유는 Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이뤄져야 한다는 규칙이 있기 때문임

\<div>가 쓰기 싫으면
- react 모듈에서 Fragmnt 컴포넌트룰 imporot해서 <Fragment>로 감싸주어도 된다. 
- <> </> 로 감싸주어도 된다. 

### JS도 쓸 수 있네
JSX 내부에서 코드를 {} 로 감싸면 된다. 

> var는 scope가 함수단위임\
 let과 const는 scope가 블록 단위임 또한 같은 블록 안에서 중복 선언이 불가. \
 ES6문법에서는 var를 쓸 일이 없음. 

 
 ### if문 못써, 삼항연산자 ㄱ
 ```javascript
 function App() {
     const name = "React";

     return (
         <div>
            {name === "React" ? (<h1>It's React</h1>) : (<h1>It's Not React</h1>)}
        </div>
        
        <div>
            {name === "React" && <h1>It's React</h1>}  // &&연산자는 리액트에서 false를 렌더링할 때 아무것도 나타나지 않는다.
        </div>
     );
 }
 ```

 ### undefined 렌더링 ㄴ
undefined를 렌더링하면 오류남 

 ```javascript
 function App() {
     const name = undefined;

     return (
         name || "It's undefined" // OR를 사용해, 해당 값이 undefined일 때 사용할값을 지정할 수 있음 -> 오류방지
     );
 }
 ```
 
 ### 인라인 스타일링
 - Object 형태로 넣어줘야 한다. 
 - background-color 같은 하이픈은 카멜케이스로 바꿔줘야함

 ```javascript
 function App() { 
  const name = "ffff";
  const style = {
    backgroundColor:'black',
    padding: 16, // 안씀 자동 px단위로
    color:'white'
  };

  return (
    <div style={style}>{name}</div>
  )
}
 ```

 ### className
 class를 지정해줄 때 className으로 해야함 

`<div className="some"></div>`
 
> self-closing 태크: 태그 사이에 별 내용이 없으면 선언과 동시에 닫아도됨 `<input />`

