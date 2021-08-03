import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, useField } from 'formik';
import axios from 'axios';
import {
  Label, Error, Submit, Container, H3,
} from './styles.js';
import { Input, P, ButtonLink } from '../../styles.js';

// Field hook from Formik to create reusable input component
const InputComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Label>
      {label}
      :
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
      <Input {...field} {...props} />
    </Label>
  );
};

// Sign up modal
export const SignUpForm = ({ setLoggedIn, toggleSignUpModal, toggleLogInModal }) => {
  const schema = Yup.object().shape({
    name: Yup.string().required(' Maybe a fantasy title?'),
    email: Yup.string().email(' Oops! Is that valid?').required(' We need this :('),
    password: Yup.string().required(' We need this :('),
  });

  // Send to database
  // values = {name... email...password }
  const handleSignUpSubmit = (values) => {
    axios.post('/signup', values).then((result) => {
      // result.data will give us the status codes
      if (result.data === 'OK') {
        toggleSignUpModal();
        setLoggedIn(true);
      }
      // Handle incorrect signup
    });
  };

  return (
    <Container>
      <H3>Sign Up</H3>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => handleSignUpSubmit(values)}
        validationSchema={schema}
      >
        {() => (
          <Form>
            <InputComponent name="name" type="text" label="Name" autoComplete="off" />
            <InputComponent name="email" type="email" label="Email" autoComplete="off" />
            <InputComponent name="password" type="password" label="Password" autoComplete="off" />
            <Submit type="submit">Sign up</Submit>
          </Form>
        )}
      </Formik>
      <P>Already have an account? </P>
      <ButtonLink onClick={toggleLogInModal}>
        Log in instead
      </ButtonLink>
    </Container>
  );
};

export const LogInForm = ({ setLoggedIn, toggleLogInModal, toggleSignUpModal }) => {
  const schema = Yup.object().shape({
    email: Yup.string().email(' Oops! Is that valid?').required(' We need this :('),
    password: Yup.string().required(' We need this :('),
  });

  // Send to database
  const handleLogInSubmit = (values) => {
    axios.post('/login', values).then((result) => {
      if (result.data === 'OK') {
        toggleLogInModal();
        setLoggedIn(true);
      }
      // Handling the errors for not correct login
    });
  };

  return (
    <Container>
      <H3>Log in</H3>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => handleLogInSubmit(values)}
        validationSchema={schema}
      >
        {() => (
          <Form>
            <InputComponent name="email" type="email" label="Email" autoComplete="off" />
            <InputComponent name="password" type="password" label="Password" autoComplete="off" />
            <Submit type="submit">Log in</Submit>
          </Form>
        )}
      </Formik>
      <P>No account? </P>
      <ButtonLink onClick={toggleSignUpModal}>
        Create one instead
      </ButtonLink>
    </Container>
  );
};
