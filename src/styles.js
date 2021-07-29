import styled, { createGlobalStyle, css } from 'styled-components';
import AtkinsonBold from './fonts/Atkinson-Hyperlegible-Bold-102a.woff2';
import AtkinsonRegular from './fonts/Atkinson-Hyperlegible-Regular-102a.woff2';

const dark = '#000000';
const white = '#ffffff';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Atkinson Bold";
    src: url(${AtkinsonBold}) format('woff2');
  }

  @font-face {
    font-family: "Atkinson Regular";
    src: url(${AtkinsonRegular}) format('woff2);
  }

  body {
    font-family: "Atkinson Regular";
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
