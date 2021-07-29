import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Section from './components/Section.jsx';
// import { GlobalStyle } from './styles.js';
import Modal from './components/Modal/index.jsx';
import ModalInner from './components/ModalInner/index.jsx';
import Nav from './components/Nav/index.jsx';

export default function App() {
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [skills, setSkills] = useState([]);
  const [resources, setResources] = useState([]);
  const [categoriesCompleted, setCategoriesCompleted] = useState([]);
  const [skillsCompleted, setSkillsCompleted] = useState([]);

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

      console.log(appSkills);
      setSections(appSections);
      setCategories(appCategories);
      setSkills(appSkills);
      setResources(appResources);
      setCategoriesCompleted(appCategoriesCompleted);
      setSkillsCompleted(appSkillsCompleted);
    });
  }, []);

  return (
    <>
      <Nav loggedIn={loggedIn} />

      <div>
        {/* <GlobalStyle /> */}
        {sections && sections.map((section) => (
          <Section id={section.id} sectionName={section.sectionName} skills={skills} />
        ))}
      </div>

    </>
  );
}
