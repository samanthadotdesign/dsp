import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './styles.js';
import Dashboard from './components/Dashboard/index.jsx';
import Home from './components/Home/index.jsx';
import Nav from './components/Nav/index.jsx';

export default function App() {
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [skills, setSkills] = useState([]);
  const [resources, setResources] = useState([]);
  const [categoriesCompleted, setCategoriesCompleted] = useState([]);
  const [skillsCompleted, setSkillsCompleted] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  const [showSignUpModal, setshowSignUpModal] = useState(false);
  const [showLogInModal, setshowLogInModal] = useState(false);

  // On page load, checks if there is already a cookie/user is logged in
  useEffect(() => {
    axios.get('/auth').then((result) => {
      const isLoggedIn = result.data;
      if (isLoggedIn) {
        setLoggedIn(true);
      }
    });
  });

  // Initializes on load all the info from the database
  useEffect(() => {
    axios.get('/data').then((result) => {
      const {
        sections: appSections,
        categories: appCategories,
        skills: appSkills,
        resources: appResources,
        categoriesCompleted: appCategoriesCompleted,
        skillsCompleted: appSkillsCompleted,
      } = result.data;

      setSections(appSections);
      setCategories(appCategories);
      setSkills(appSkills);
      setResources(appResources);
      setCategoriesCompleted(appCategoriesCompleted);
      setSkillsCompleted(appSkillsCompleted);
    });
  }, []);

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

  return (
    <>
      <GlobalStyle />

      <Nav
        loggedIn={loggedIn}
        toggleLogInModal={toggleLogInModal}
        toggleSignUpModal={toggleSignUpModal}
        setLoggedIn={setLoggedIn}
      />

      {loggedIn && (
      <Dashboard
        sections={sections}
        skills={skills}
        categoriesCompleted={categoriesCompleted}
        setCategoriesCompleted={setCategoriesCompleted}

      />
      )}
      {!loggedIn && (
      <Home
        showLogInModal={showLogInModal}
        toggleLogInModal={toggleLogInModal}
        toggleSignUpModal={toggleSignUpModal}
        showSignUpModal={showSignUpModal}
        setLoggedIn={setLoggedIn}
      />
      )}
    </>
  );
}
