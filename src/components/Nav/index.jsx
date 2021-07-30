import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../../../public/assets/logo.svg';
import {
  Button, NavBar, NavLinks, Logo,
} from './styles.js';

export default function Nav({
  loggedIn, toggleLogInModal, toggleSignUpModal, setLoggedIn,
}) {
  // Pass in "loggedIn" and use it to conditionally render buttons using ternary statement

  const handleLogOutSubmit = () => {
    axios.post('/logout').then((result) => {
      if (result.data === 'OK') {
        setLoggedIn(false);
      }
      // Error handling if the user is unable to log out
    });
  };

  return (
    <>
      <NavBar>

        <Helmet>
          <script type="text/javascript" async="true" src="./scrolled.js" />
        </Helmet>

        <Logo src={logo} />

        <NavLinks>
          <Button
            type="button"
          >
            About
          </Button>
          {!loggedIn
        && (
        <Button
          type="button"
          onClick={toggleLogInModal}
        >
          Log In
        </Button>
        )}

          {!loggedIn
        && (
        <Button
          type="button"
          onClick={toggleSignUpModal}
        >
          Sign up
        </Button>
        )}

          {loggedIn
        && (
        <Button
          type="button"
          onClick={handleLogOutSubmit}
        >
          Log out
        </Button>
        )}
        </NavLinks>
      </NavBar>
    </>
  );
}
