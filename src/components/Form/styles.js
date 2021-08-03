import styled from 'styled-components';
import { Button } from '../../styles.js';

export const Label = styled.label`
  font-family: "Atkinson Regular"
`;

export const Error = styled.span`
  color: #e26e2d;
  font-family: "Atkinson Regular";
`;

export const Submit = styled(Button)`
  margin-top: 14px;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
`;

export const H3 = styled.h3`
  font-size: 32px;
  margin-bottom: 32px;
  color: #000;
  font-family: "Atkinson Bold";
`;
