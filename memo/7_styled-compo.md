> Tagged tamplate는 python의 format 같음.. 백틱 사이에 문자열 넣고 ${} 안에 변수 넣어서 사용가능.

## Tagged Template Literal

```javascript
const MyComponent = styled.div`
  font-size: 2rem;
`;

const MyInput = styled("input")`
  color: blue;
`;

// 컴포넌트를 styled 파라미터로 넣을 경우, 해당 컴포넌트에 className props를 최상위 DOM의 className 값으로 설정하는 작업이 내부적으로 되어 있어야 함.
const Sample = ({ className }) => {
  return <div className={className}>Sample</div>;
};

const StyledSample = styled(Sample)`
  font-size: 2rem;
`;
```

```javascript
import styled, { css } from "styled-componenets";

const StyledButton = styled.button`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.backgroundColor || "black"};
  border-radius: 50%;
  color: red;

  &:hover {
    background: blue;
  }
  &:active {
    background: green;
  }

  ${(props) =>
    props.inverted &&
    css`
      /*styled component의 css를 사용하면 이쁘게 보임ㅎㅎ*/
      background: none;
      color: white;
    `}
`;

const App = () => {
  return <StyledButton backgroundColor="yellow" inverted />; // props로 "yellow"전달
};
```

## 반응형

가로 크기에 따라 다른 스타일을 적용

- 1024이상이면 width 1024적용, 색은 blue
- 1024이하이면 width 768적용, 색은 black
- 768이하이면 width 100%, 색은 red

```javascript
const Box = styled.div`
  background-color: blue;
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
    background-color: black;
  }
  @media (max-width: 768px) {
    width: 100%;
    background-color: red;
  }
`;
```