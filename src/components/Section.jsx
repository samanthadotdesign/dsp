import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skill from './Skill.jsx';
import Resource from './Resource.jsx';

export default function Section({ id, sectionName, skills }) {
  // sectionSkills = [ { skillName: ..., skillImg: ..., completed: True }, {} ]
  const [sectionSkills, setSectionSkills] = useState([]);
  const [resourceSkills, setResourceSkill] = useState([]);
  const [resourceVisible, setResourceVisible] = useState(true);
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
      setResourceSkill(result.data);
    });
  }, []);

  return (
    <>
      <section id={id}>
        <h1>{sectionName}</h1>
        {/* For every section, create a grid for all the skills with that section id */}
        <div className="grid">
          {/* Map an array of skill objects into divs */}
          {sectionSkills.map((skill) => (
            <div className="skill">
              <Skill
                skillName={skill.skillName}
                skillImg={skill.skillImg}
                skillCompleted={skillCompletedArr.includes(skill.id)}
              />
              {resourceVisible && (
              <Resource
                skillId={skill.id}
                skillName={skill.skillName}
                resources={resourceSkills[skill.id]}
                skillCompletedArr={skillCompletedArr}
                skillCompleted={skillCompletedArr.includes(skill.id)}
                setSkillCompleted={setSkillCompleted}
              />
              )}
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
