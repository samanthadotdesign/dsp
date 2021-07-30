import React from 'react';
import { Badges, Image } from './styles.js';

// categoriesCompleted is an array of completed category objects for that user
export default function Category({ categoriesCompleted }) {
  return (
    <>
      <Badges>
        {categoriesCompleted.map((category) => (
          <Image src={category.categoryImg} />
        ))}
      </Badges>
    </>
  );
}
