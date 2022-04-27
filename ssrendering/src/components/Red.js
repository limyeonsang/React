import React from "react";
import styled from "styled-components";

const RedRed = styled.div`
  background-color: red;
  font-size: 1.5rem;
  color: white;
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Red = () => {
  return <RedRed>Red</RedRed>;
};

export default Red;
