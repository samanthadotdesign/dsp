import styled, { createGlobalStyle, css } from 'styled-components';

const dark = '#000';
const light = '#fff';
const gray = '#ccc';

export const GlobalStyle = createGlobalStyle`
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
  font-size: 16px;
  padding: 8px;
  width: 100%;
  background-color: ${dark};
  color: ${light}
  transition: all 0.5s ease-in;
  outline: none;
  border: none;
  margin-bottom: 16px;
  text-align: left;

  @media screen and (max-width: 550px) {
    padding: 12px;
  }

  &:hover {
    background-color: ${gray}
  }
`;

export const SecondaryButton = styled(Button)`
  width: 100%;
  padding: 4px;
  font-size: 14px;
  background-color: ${light};
  outline: none;
  border: 1.5px solid ${dark};
  text-align: center;
  cursor: pointer;
  margin-top: 14px;

  &:hover {
    background-color: ${gray}
  }

  @media screen and (max-width: 550px) {
    padding: 8px;
  }
`;
