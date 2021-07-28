import React, { useState } from 'react';
import {
  Container, SuccessContainer, H3, H4, P,
} from './styles.js';
import Form from '../Form/index.jsx';

const Input = ({ handleSuccess }) => (
  <Container>
    <H3>Sign Up</H3>
    <P>
      Join Designer Starter Pack
    </P>
    <Form handleSuccess={handleSuccess} />
  </Container>
);

const Success = () => (
  <SuccessContainer>
    <H4>Yay! We're so excited!</H4>
    <P>
      We hope you are too. In the meantime you go check out some skills.
    </P>
  </SuccessContainer>
);

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => setShowSuccess(true);

  return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />;
};

export default ModalInner;
