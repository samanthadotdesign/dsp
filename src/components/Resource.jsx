import axios from 'axios';
import React from 'react';

export default function Resource({
  skillId, skillName, resources, skillCompletedArr, skillCompleted, setSkillCompleted,
}) {
  const handleClick = () => {
    axios.put('/skill', { skillId, skillCompleted }).then(() => {
      // If skill is complete, the copy is Uncomplete Skill
      if (skillCompleted) {
        const result = skillCompletedArr.filter((id) => id != skillId);
        setSkillCompleted(result);
      } else {
        setSkillCompleted([...skillCompletedArr, skillId]);
      }
    });
  };

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
      <button onClick={handleClick}>{skillCompleted ? 'Uncomplete Skill' : 'Complete Skill'}</button>
    </div>
  );
}

// When the button is clicked for that skillId
// If skillId exists in the database as completed, remove it + update button copy to be "Complete Skill"
// If skillId does not exist in the database, add it + update button copy to be "Uncomplete Skill"
