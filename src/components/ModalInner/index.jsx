// Will be deprecated (combining it with Modal + Form only )
import React from 'react';
import {
  Container, H3, H4, P,
} from './styles.js';
import { SignUpForm, LogInForm } from '../Form/index.jsx';

const Input = ({ handleSuccess }) => (
  <Container>
    <H3>Sign Up</H3>
    <P>
      Join Designer Starter Pack
    </P>
    <SignUpForm />
  </Container>
);

// Inner modal
const ModalInner = () => (showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />);

export default ModalInner;
