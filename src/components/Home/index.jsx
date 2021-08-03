import React from 'react';
import { GlobalStyle, P } from '../../styles.js';
import Modal from '../Modal/index.jsx';
import { SignUpForm, LogInForm } from '../Form/index.jsx';
import { Section, Em } from './styles.js';

export default function Home({
  showLogInModal,
  toggleLogInModal,
  toggleSignUpModal,
  showSignUpModal,
  setLoggedIn,
}) {
  return (
    <>
      <GlobalStyle />

      {showSignUpModal && (
      <Modal toggleModal={toggleSignUpModal}>
        <SignUpForm
          setLoggedIn={setLoggedIn}
          toggleSignUpModal={toggleSignUpModal}
          toggleLogInModal={toggleLogInModal}
        />
      </Modal>
      )}

      {showLogInModal && (
      <Modal toggleModal={toggleLogInModal}>
        <LogInForm
          setLoggedIn={setLoggedIn}
          toggleLogInModal={toggleLogInModal}
          toggleSignUpModal={toggleSignUpModal}
        />
      </Modal>
      )}

      <Section>
        <P>
          <Em>Designer Starter Pack</Em>
          {' '}
          is a curated list of Figma skills by Samantha Lee of Funding Societies.
          <br />
          <br />
          This list exists to better organize the list of skills I've come to know, like, and/or find interesting while working in product design.
        </P>
      </Section>
    </>
  );
}
