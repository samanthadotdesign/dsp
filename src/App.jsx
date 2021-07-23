import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Section from './components/Section.jsx';
// import Skill from './components/Skill.jsx';

export default function App() {
  const [sections, setSections] = useState();
  const [categories, setCategories] = useState();
  const [skills, setSkills] = useState();
  const [resources, setResources] = useState();
  const [categoriesCompleted, setCategoriesCompleted] = useState();
  const [skillsCompleted, setSkillsCompleted] = useState();

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

  const result = typeof sections;
  console.log(sections);
  return (<div />
  // sections.map((section) => (
  //   <Section id={section.id} sectionName={section.sectionName} />
  // ))
  // <Skill skills={skills} />
  );
}

/*
<App/>
- <Section/>
  - section title
  - grid
- <Skill/>
    - useEffect => initializing when all the images show up for the first time
    => sets state based on what comes from database for that user

    - boolean to show muted / colored

    - <Resource/>
        - list of skills
        - Mark skill complete/uncomplete btn
        - <Add/> (in the future)
- <Category/>
  - badgeState = [ 1, 2, 3 ... ]

*/
