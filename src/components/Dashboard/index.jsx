import React from 'react';
import Section from '../Section.jsx';

export default function Dashboard({ sections, skills }) {
  return (
    <div>
      {sections && sections.map((section) => (
        <Section id={section.id} sectionName={section.sectionName} skills={skills} />
      ))}
    </div>
  );
}
