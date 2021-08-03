import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '../../styles.js';
import Modal from '../Modal/index.jsx';
import { SignUpForm, LogInForm } from '../Form/index.jsx';

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
        <SignUpForm setLoggedIn={setLoggedIn} toggleSignUpModal={toggleSignUpModal} />
      </Modal>
      )}

      {showLogInModal && (
      <Modal toggleModal={toggleLogInModal}>
        <LogInForm setLoggedIn={setLoggedIn} toggleLogInModal={toggleLogInModal} />
      </Modal>
      )}
    </>
  );
}
