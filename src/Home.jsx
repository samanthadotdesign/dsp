import React, { useState, useEffect } from 'react';
import Nav from './components/Nav/index.jsx';
import Modal from './components/Modal/index.jsx';
import { SignUpForm, LogInForm } from '../Form/index.jsx';

export default function Home() {
  const [showSignUpModal, setshowSignUpModal] = useState(false);
  const [showLogInModal, setshowLogInModal] = useState(false);

  const toggleSignUpModal = () => {
    // Log in modal should be closed
    setshowLogInModal(false);

    // Show sign up modal if sign up modal is not open
    // If open, close sign up modal
    setshowSignUpModal(!showSignUpModal);
  };

  const toggleLogInModal = () => {
    setshowSignUpModal(false);
    setshowLogInModal(!showLogInModal);
  };

  // Dummy set to true
  const loggedIn = true;

  return (
    <>
      <Nav
        loggedIn={loggedIn}
        toggleLogInModal={toggleLogInModal}
        toggleSignUpModal={toggleSignUpModal}
      />

      {showSignUpModal && (
      <Modal toggleModal={toggleSignUpModal}>
        <SignUpForm />
      </Modal>
      )}

      {showLogInModal && (
      <Modal toggleModal={toggleLogInModal}>
        <LogInForm />
      </Modal>
      )}

    </>
  );
}
