import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

const Box = styled.div`
  background-color: blue;
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width:768px; background-color:black;`}
  ${media.tablet`width:100%; background-color:red;`}
`;

export default Box;
