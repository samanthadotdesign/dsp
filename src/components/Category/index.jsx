import React, { useState, useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { Badges, Image } from './styles.js';

const sketch = (p5, categoriesCompleted) => {
  // Badges is an array of preloaded images
  const badges = [];

  // Preload each image and then include it into the badges array
  p5.preload = () => {
    for (let i = 0; i < categoriesCompleted.length; i += 1) {
      const img = p5.loadImage(categoriesCompleted[i].categoryImg);
      badges.push(img);
    }
  };

  let xPosition;
  let yPosition;
  let xSpeed;
  let ySpeed;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);

    // Create bouncing badges on every page load using draw()
    if (badges.length > 0) {
      for (let i = 0; i < badges.length; i += 1) {
        badges[i] = {
          image: badges[i],
          xPosition: p5.random(p5.windowWidth),
          yPosition: p5.random(p5.windowHeight),
          xSpeed: p5.random(1, 2),
          ySpeed: p5.random(1, 3),
        };
      }
    }
  };

  // Redraw on canvas every single second
  p5.draw = () => {
    p5.clear();

    // Displays each image on the screen
    if (badges.length > 0) {
      console.log(badges);

      for (let i = 0; i < badges.length; i += 1) {
        p5.image(badges[i].image, badges[i].xPosition, badges[i].yPosition, 150, 150);

        if (badges[i].xPosition > p5.windowWidth - 150 || badges[i].xPosition < 0) {
          console.log('working inside if statement');
          badges[i].xSpeed *= -1;
        }
        if (badges[i].yPosition > p5.windowHeight - 75 || badges[i].yPosition < 75) {
          badges[i].ySpeed *= -1;
        }
        badges[i].xPosition += badges[i].xSpeed;
        badges[i].yPosition += badges[i].ySpeed;
      }
    }
  };
};

// categoriesCompleted is an array of completed category objects for that user
export default function Category({ categoriesCompleted }) {
  return (
    <>
      <Badges>
        <P5Wrapper sketch={(p5) => { sketch(p5, categoriesCompleted); }} />
      </Badges>
    </>
  );
}
