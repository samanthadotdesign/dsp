import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Skill from './Skill.jsx';

export default function Section({ id, sectionName }) {
  return (
    <>
      <section id={id}>
        <h1>{sectionName}</h1>
        <p>
          {id}
        </p>
        {/* <div className="grid">
          {skills.map((skill) => ( */}
        {/* <Skill skill_name={skill.skill_name} skill_img={skill.skill_img} /> */}
        {/* ))}
        </div> */}
      </section>
    </>
  );
}
