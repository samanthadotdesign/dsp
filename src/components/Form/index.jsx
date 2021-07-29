import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, useField } from 'formik';
import axios from 'axios';
import {
  Input, Label, Error, Submit, Container, H3, H4,
} from './styles.js';

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
export const SignUpForm = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Required field'),
    email: Yup.string().email('Must be a valid email address').required('Required field'),
    password: Yup.string().required('Required field'),
  });

  // Send to database
  const handleSignUpSubmit = (values) => {
    console.log(values);
    axios.post('/signup');
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
            <InputComponent name="password" type="text" label="Password" autoComplete="off" />
            <Submit type="submit">Submit</Submit>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export const LogInForm = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email address').required('Required field'),
    password: Yup.string().required('Required field'),
  });

  // Send to database
  const handleLogInSubmit = (values) => {
    console.log(values);
    axios.post('/login');
  };

  return (
    <Container>
      <H3>Log In</H3>
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
            <InputComponent name="password" type="text" label="Password" autoComplete="off" />
            <Submit type="submit">Submit</Submit>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
