import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: 5rem;
  height: 5rem;
  background: black;
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
      background: none;
      color: white;
    `}
`;

function Button({ children, ...rest }) {
  return (
    <StyledButton {...rest} inverted>
      {children}
    </StyledButton>
  );
}

export default Button;
