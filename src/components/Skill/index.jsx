import React from 'react';

export default function Skill({
  skillName, skillImg, skillCompleted,
}) {
  return (
    <>
      <figure>
        <img
          src={skillImg}
          alt={skillName}
          className={skillCompleted ? 'colored' : 'muted'}
        />
        <figcaption>{skillName}</figcaption>
      </figure>
    </>
  );
}
