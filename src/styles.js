import styled, { createGlobalStyle, css } from 'styled-components';

const dark = '#000000';
const white = '#ffffff';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Atkinson Regular";
  }

  * {
  box-sizing: border-box;
  margin: 0;
  }
`;

export const AbsoluteCenter = css`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  padding: 8px;
  width: 100%;
  background-color: ${dark};
  color: ${white}
  transition: all 0.5s ease-in;
  outline: none;
  border: none;
  margin-bottom: 16px;
  text-align: left;
`;
