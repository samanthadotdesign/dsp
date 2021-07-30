import styled from 'styled-components';

export const Logo = styled.img`
  z-index: 4;
  width: 250px;
  transition: all 0.4s ease-in-out;  
`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.5s ease;

  margin-left: 14px;
  color: #000;
  font-size: 16px;

  &:hover {
    color: #ccc;
  }
`;

export const NavBar = styled.header`
  padding: 14px 24px;
  max-height: 60px;
  background-color: inherit;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;

  z-index: 2;

  &.scrolled {
    ${Logo} & {
      width: 50%;
    }
  }

  @media screen and (max-width: 550px) {
    padding-top: 48px;
    height: fit-content;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &.scrolled {
      ${Logo} & {
        width: 100%;
        margin-bottom: 12px;
     }
  }
  }
`;

export const NavLinks = styled.nav`
  @media screen and (max-width: 550px) {
    margin-top: 14px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }   
`;
