import React from 'react';
import Section from '../Section.jsx';
import Category from '../Category/index.jsx';

export default function Dashboard({
  sections, skills, categoriesCompleted, setCategoriesCompleted,
}) {
  return (
    <div>
      {categoriesCompleted && <Category categoriesCompleted={categoriesCompleted} />}

      {sections && sections.map((section) => (
        <Section
          id={section.id}
          sectionName={section.sectionName}
          skills={skills}
          categoriesCompleted={categoriesCompleted}
          setCategoriesCompleted={setCategoriesCompleted}
        />
      ))}
    </div>
  );
}
