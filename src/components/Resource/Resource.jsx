import axios from 'axios';
import React, { useState } from 'react';
import ResourceForm from './ResourceForm.jsx';
import {
  H2, ResourceDiv, UL, LI, Link,
} from './styles.js';
import { SecondaryButton } from '../../styles.js';

// Add resource emoji

// resourceSkill is only for this particular skillId

// skillCompleted is a boolean describing if the skill is completed or not
// skillCompletedArr is array of skillIds of completed skills
export default function Resource({
  skillId, skillName, resourceSkills, setResourceSkills, skillCompletedArr, skillCompleted, setSkillCompleted, categoriesCompleted, setCategoriesCompleted,
}) {
  const [resourceForm, setResourceForm] = useState(false);
  const [addResourceBtn, setAddResourceBtn] = useState(true);
  const resourcesForSkillId = resourceSkills[skillId];

  const handleClick = () => {
    axios.put('/skill', { skillId, skillCompleted }).then((result) => {
      const { currentCategoryId, currentCategory, categoryIsComplete } = result.data;

      /* If the skill is already completed before the handleClick,
      the user is clicking to "uncomplete" the skill */
      if (skillCompleted) {
        const skillsArray = skillCompletedArr.filter((id) => id != skillId);
        setSkillCompleted(skillsArray);

        // categoriesCompleted is an array of objects
        if (!categoryIsComplete) {
          const categoriesArray = categoriesCompleted.filter((category) => category.id != currentCategoryId);
          setCategoriesCompleted(categoriesArray);
        }

      /* If the skill is not yet completed,
      the user is clicking to "complete skill */
      } else {
        setSkillCompleted([...skillCompletedArr, skillId]);

        /* categoryIsComplete comes from the backend response
        If categoryIsComplete, add new categoryId to the categoriesCompleted */
        if (categoryIsComplete) {
          setCategoriesCompleted([...categoriesCompleted, currentCategory]);
        }
      }
    });
  };

  // Add the new inline fields for user to add the resource
  const handleShowForm = () => {
    setResourceForm(true);
    setAddResourceBtn(false);
  };

  // If skill is complete, the copy is Uncomplete Skill
  return (
    <ResourceDiv
      className="resource"
    >
      <H2>{skillName}</H2>
      <UL>
        {resourcesForSkillId && resourcesForSkillId.map((resource) => (
          <LI>
            <Link href={resource.link} target="_blank">
              {resource.name}
            </Link>
          </LI>
        ))}
      </UL>

      {resourceForm
      && (
      <ResourceForm
        resourceSkills={resourceSkills}
        setResourceSkills={setResourceSkills}
        skillId={skillId}
        setResourceForm={setResourceForm}
        setAddResourceBtn={setAddResourceBtn}
      />
      )}

      {addResourceBtn && (
      <SecondaryButton
        type="button"
        onClick={handleShowForm}
      >
        Add Resource
      </SecondaryButton>
      )}

      <SecondaryButton
        onClick={handleClick}
      >
        {skillCompleted ? 'Uncomplete Skill' : 'Complete Skill'}
      </SecondaryButton>
    </ResourceDiv>
  );
}

// When the button is clicked for that skillId
// If skillId exists in the database as completed, remove it + update button copy to be "Complete Skill"
// If skillId does not exist in the database, add it + update button copy to be "Uncomplete Skill"
