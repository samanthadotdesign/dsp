import styled from 'styled-components';

export const Input = styled.input`
  border: 2px solid #000;
  box-sizing: border-box;
  font-size: 18px;
  margin: 8px 0 24px;
  padding: 12px;
  width: 100%;
  font-weight: 600;
  &:focus {
    border-color: #0519ce;
  }
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Error = styled.span`
  color: #e26e2d;
`;

export const Submit = styled.button`
  background: none;
  border: 2px solid #0519ce;
  color: #0519ce;
  cursor: pointer;
  float: right;
  font-size: 18px;
  font-weight: 700;
  padding: 12px;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const Container = styled.div`
  color: #000;
  max-width: 440px;
`;

export const H3 = styled.h3`
  font-size: 64px;
  font-weight: 600;
  line-height: 0.7;
  margin: 0;
  color: #0519ce;
`;

export const H4 = styled.h4`
  color: #0519ce;
  font-size: 34px;
  font-weight: 600;
  line-height: 1;
  margin: 20px 0 0;
  @media (max-width: 700px) {
    font-size: 24px;
  }
`;
