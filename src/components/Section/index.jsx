import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skill from '../Skill/index.jsx';
import Resource from '../Resource/Resource.jsx';
import { Grid, SectionDiv, HoverResourceDiv } from './styles.js';
import { H1 } from '../../styles.js';

export default function Section({
  id, sectionName, skills, categoriesCompleted, setCategoriesCompleted,
}) {
  // sectionSkills = [ { skillName: ..., skillImg: ..., completed: True }, {} ]
  const [sectionSkills, setSectionSkills] = useState([]);
  const [resourceSkills, setResourceSkills] = useState([]);
  const [skillCompletedArr, setSkillCompleted] = useState([]);

  // On load, print all the skills for each section
  // For each section, get all the categoryId
  // section 0 = [0], section 1 = [1, 2, 3], section 2 = [4, 5]
  useEffect(() => {
    axios.get(`/category-id/${id}`).then((result) => {
      const { categoryIds, skillIdsCompleted } = result.data;

      // Set skill ids completed so we can set it inside the skill boolean
      setSkillCompleted(skillIdsCompleted);
      // Get all the skills for each section
      const skillsInCategories = skills.filter((skill) => categoryIds.includes(skill.categoryId));

      // Setting the conditions for muted/colored
      setSectionSkills(skillsInCategories);
    });
  }, [skills]);
  // Why do I need to pass in the changing skills as an array here?

  // On load, get all the resources
  // Find the resources via skill id
  useEffect(() => {
    axios.get('/resources').then((result) => {
      setResourceSkills(result.data);
    });
  }, []);

  return (
    <>
      <SectionDiv id={id}>
        <H1>{sectionName}</H1>
        {/* For every section, create a grid for all the skills with that section id */}
        <Grid className="grid">
          {/* Map an array of skill objects into divs */}
          {sectionSkills.map((skill) => (
            <HoverResourceDiv>
              <Skill
                skillName={skill.skillName}
                skillImg={skill.skillImg}
                skillCompleted={skillCompletedArr.includes(skill.id)}
              />
              <Resource
                skillId={skill.id}
                skillName={skill.skillName}
                resourceSkills={resourceSkills}
                setResourceSkills={setResourceSkills}
                skillCompletedArr={skillCompletedArr}
                skillCompleted={skillCompletedArr.includes(skill.id)}
                categoriesCompleted={categoriesCompleted}
                setSkillCompleted={setSkillCompleted}
                setCategoriesCompleted={setCategoriesCompleted}
              />
            </HoverResourceDiv>
          ))}
        </Grid>

      </SectionDiv>
    </>
  );
}
