import axios from 'axios';
import React from 'react';
import Button from '../Button.jsx';

export default function Nav({ loggedIn, toggleLogInModal, toggleSignUpModal }) {
  // Pass in "loggedIn" and use it to conditionally render buttons using ternary statement

  const handleLogOutSubmit = () => {
    axios.post('/logout');
  };

  return (
    <>
      <nav>
        {!loggedIn && <Button message="Log in" onSubmit={toggleLogInModal} />}

        {!loggedIn && <Button message="Sign up" onSubmit={toggleSignUpModal} />}

        {loggedIn && (
        <Button
          message="Log out"
          onSubmit={handleLogOutSubmit}
        />
        )}
      </nav>
    </>
  );
}
