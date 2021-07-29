import styled, { createGlobalStyle, css } from 'styled-components';
import AtkinsonBold from './fonts/Atkinson-Hyperlegible-Bold-102a.woff2';
import AtkinsonRegular from './fonts/Atkinson-Hyperlegible-Regular-102a.woff2';

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
`;
