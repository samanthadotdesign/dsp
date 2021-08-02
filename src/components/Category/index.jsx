import React, { useState, useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { Badges, Image } from './styles.js';

// Badges is an array of loaded images
const badges = [];

const sketch = (p5, categoriesCompleted) => {
  const movingBadges = [];

  // isMouseInside returns boolean
  const isMouseInside = (x, y) => p5.mouseX > x + 150 && p5.mouseY > y - 75 && p5.mouseY < y + 75;

  // Constructor for bouncing badge class
  class BouncingBadge {
    constructor(image, positionX, positionY, xSpeed, ySpeed) {
      this.image = image;
      this.xPosition = positionX;
      this.yPosition = positionY;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
    }

    move() {
      // p5.mouseOver()
      console.log('moving badge');
      this.xPosition += this.xSpeed;
      console.log('************ xPosition changing');
      console.log(this.xPosition);

      if (isMouseInside(this.xPosition, this.yPosition)) {
        this.xPosition += this.xSpeed;
        this.yPosition += this.ySpeed;
      }
      this.xPosition -= this.xSpeed;
      this.yPosition -= this.ySpeed;

      if (this.xPosition > p5.windowWidth - 150 || this.xPosition < 75) {
        this.xSpeed = -this.xSpeed;
      }

      if (this.yPosition > p5.windowHeight - 75 || this.yPosition < 75) {
        this.ySpeed = -this.ySpeed;
      }
    }

    show() {
      console.log('showing badge');
      p5.image(this.image, this.xPosition, this.yPosition, this.xSpeed, this.ySpeed);
    }
  }

  // Preload each image and then include it into the badges array.
  p5.preload = () => {
    for (let i = 0; i < categoriesCompleted.length; i += 1) {
      const img = p5.loadImage(categoriesCompleted[i].categoryImg);
      badges.push(img);
    }
  };

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);

    const positionX = p5.random(p5.windowWidth);
    const positionY = p5.random(p5.windowHeight);
    const xSpeed = p5.random(5);
    const ySpeed = p5.random(5);

    // Create bouncing badges on every page load using draw()
    for (let i = 0; i < badges.length; i += 1) {
      const b = new BouncingBadge(badges[i], positionX, positionY, xSpeed, ySpeed);
      movingBadges.push(b);
    }
  };

  // Display each image on the screen
  // for (let i = 0; i < badges.length; i += 1) {
  //   p5.image(badges[i], i, i);
  // }

  // Redraw on canvas every single second
  p5.draw = () => {
    p5.clear();
    for (let i = 0; i < badges.length; i += 1) {
      p5.image(badges[i], i, i);
      movingBadges[i].move();
      movingBadges[i].show();
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
