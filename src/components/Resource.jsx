import axios from 'axios';
import React from 'react';

// Add resource emoji

// skillCompleted is a boolean describing if the skill is completed or not
// skillCompletedArr is array of skillIds of completed skills
export default function Resource({
  skillId, skillName, resources, skillCompletedArr, skillCompleted, setSkillCompleted, categoriesCompleted, setCategoriesCompleted,
}) {
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

  // If skill is complete, the copy is Uncomplete Skill
  return (
    <div
      className="resource"
    >
      <h2>{skillName}</h2>
      <ul>
        {resources && resources.map((resource) => (
          <li>
            <a href={resource.link} target="_blank">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
      >
        {skillCompleted ? 'Uncomplete Skill' : 'Complete Skill'}
      </button>
    </div>
  );
}

// When the button is clicked for that skillId
// If skillId exists in the database as completed, remove it + update button copy to be "Complete Skill"
// If skillId does not exist in the database, add it + update button copy to be "Uncomplete Skill"
