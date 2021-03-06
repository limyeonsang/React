## Understand React
리액트 프로젝트에서 특정 부분이 어떻게 생길지 정하는 선언체를 컴포넌트라고함.
컴포넌트는 재사용이 가능한 APi로 수많은 기능을 내장했으며, 컴포넌트 하나에서 해당 컴포넌트의 생김새와 작동 방식을 정의한다. 

### 리액트는 뷰를 어케 렌더링하길래 데이터가 변할 때마다 리렌더링하면서 성능은 아낄까. -> (초기 렌더링,  리렌더링)
#### 초기 렌더링
React엔 초기 렌더링을 다루는 render 함수가 있다. 
- 렌더 함수 특징
    - 컴포넌트를 정의
    - 뷰의 모양새와 작동 박식에 대한 정보를 지닌 객체 반환
    - 내부 컴포넌트를 재귀적으로 렌더링

- 초기 렌더링의 과정
    1. 내부 컴포넌트 렌더링을 to 최상위 컴포넌트와 내부 컴포넌트를 랜더링
    2. 최상위 컴포넌트 렌더링 작업이 끝나면 지니고 있는 정보들을 사용하여 HTML 마크업을 만듦
    3. 실제 페이지의 DOM요소 안에 주입, DOM을 화면에 뿌림


#### 리렌더링
컴포넌트에서 데이터에 변화가 있을 때 우리가 눈엔 변화에 따라 뷰가 변형되는 것처럼 보이지만, 사실 새로운 요소로 갈아 끼운다.
- 컴포넌트가 리렌더링 되는 경우
    - 자신의 상태 변경
    - 부모 컴퍼넌트가 리렌더링
    - 자신이 전달받은 props가 변경
    - forceUpdate 함수가 실행될 때

render함수가 이 또한 맡아서 하는데, 데이터가 업데이트 되었을 경우 값을 수정하지 않고 render를 호춣한다. 
render가 업데이트된 데이터를 지닌 뷰를 생성한다. 
이때 이 결과를 곧바로 DOM에 반영하는 것이 아닌, 이전에 render 함수가 만들었던 컴포넌트 정보와 지금 만든 컴포넌트 정보를 비요해서 최소한의 연산으로 DOM 트리를 업데이트

## Virtual DOM
현재의 DOM은 조작할 때마다 웹 페이지를 새로 그리기 때문에 업데이트가 잦을수록 성능이 저하됨. 

이를 해결하기 위해 React는 Virtual DOM을 이용해 업데이트를 추상화 -> DOM 처리 횟수를 최소화

Virtual DOM을 사용시, DOM을 추상화한 JS 객체를 구성해 사용, 

리액트에서 데이터가 변해서 웹 브라우저에 실제 DOM을 업데이트 하는 과정
1. 데이터 업데이트시 전체 UI를 Virtual DOM에 리렌더링
2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교
3. 바뀐 부분만 실제 DOM에 적용

 