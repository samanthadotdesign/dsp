import React, { useState, useEffect } from 'react';
import axios from 'axios';

// I only want skills for that section => pass in the prop sectionId into Skill component
export default function Skill({ skills }) {
  // Need to keep track of skill completed/uncompleted for UI

  return skills.map((skill) => (
    <>
      <figure>
        <img
          src={skill.skillImg}
          alt={skill.skillName}
        />
        <figcaption>{skill.skillName}</figcaption>
      </figure>
    </>
  ));
}

/*
- getDashboardData -> all the data (skills, categories, etc.)
- skills -> skill_img, skill_name

- uncompleted / completed

- skills, sections
- section component -> map skill component
*/
