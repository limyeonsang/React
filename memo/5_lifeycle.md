컴포넌트의 라이프사이클은, 페이지 랜딩 전 ~ 페이지에서 사라질 때

라이프사이클 메서드의 종류

1. Will 접두사가 붙은 메서드: 작업을 작동하기 전에 실행되는 메서드
2. Did: 어떤 작업을 작동하나 후에 실행되는 메서드

라이프사이클은 마운트, 업데이트, 언마운트 카테고리로 나뉜다.

- 마운트: DOM이 생성되고 웹 브라우저상에 나타내는 것
- 업데이트: 컴포넌트는 아래와 같은 경우에 업데이트함
  1. props가 바뀔 떄
  2. state가 바뀔 떄
  3. 부모 컴포넌트가 리렌더링될 때
  4. this.forceUpdate로 강제로 렌더링 트리거할 때
- 언마운트: 마운트의 반대 과정임 즉 컴포넌트를 DOM에서 제거하는 것

### 라이프사이클 종류들들

- render(): 컴포넌트 모양새를 정의, 이 메서드에서 props, state에 접근 가능, 리액트 요소(html태그, 컴포넌트)를 리턴
- constructor: 컴포넌트를 만들 때 처음으로 실행, 초기 state를 정한다.
- getDerivedStateFromProps(): props로 받아 온 값을 state에 동기화, 마운트와 업데이트 시 호출
- componentDidMount(): 컴포넌트를 만들고 첫 렌더링을 마친 후 실행, 비동기 작업을 처리
- shouldComponentUpdate(): props 또는 state를 변경시, 리렌더링을 시작할지 여부를 지정하는 메서드 리턴타입 무조건 bool,
- getSnapshotBeforeUpdate(): render에서 만들어진 결과물이 브라우저에 반영되기 직전에 호출
- componentDidUpdate(): 리렌더링을 완료한 후 실행. DOM 관련 처리를 해도 무방
- componentWillUnmount(): 컴포넌트를 DOM에서 제거할 떄 실행.
- componentDidCatch(): 컴포넌트 렌더링 도중 에러 발생시, 오류 UI를 볼 수 있게 해줌.

<img src="https://velog.velcdn.com/images%2Fwhdvkf92%2Fpost%2F745af11e-6b8c-454e-ae70-7c0f1c089d60%2F%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4%20%EB%A9%94%EC%84%9C%EB%93%9C.JPG" />
