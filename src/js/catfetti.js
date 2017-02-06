import raf from 'raf';
import addOptimizedResizeListener from 'src/js/utils/resize';
import Rocket from 'src/js/particles/rocket';

/**
 * Canvas code was adapted and modified from a tutorial by Paul Lewis
 * at http://creativejs.com/tutorials/creating-fireworks/. As per the original
 * Apache license, the original license terms are reproduced below.
 */

/**
 * Copyright 2011 Paul Lewis. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Initialization
 */

const particles = [];
let mainCanvas = null,
    mainContext = null,
    viewportWidth = 0,
    viewportHeight = 0,
    allowNewAnimation = true;

export default function initialize() {

  onWindowResize();
  addOptimizedResizeListener(onWindowResize);

  mainCanvas = document.createElement('canvas');
  mainCanvas.id = 'catfetti';
  mainContext = mainCanvas.getContext('2d');

  setMainCanvasDimensions();

  document.body.appendChild(mainCanvas);
  document.addEventListener('mouseup', createRockets, true);
  document.addEventListener('touchend', createRockets, true);

}

function onWindowResize() {
  viewportWidth = window.innerWidth;
  viewportHeight = window.innerHeight;
  if (mainCanvas) setMainCanvasDimensions();
}

function setMainCanvasDimensions() {
  mainCanvas.width = viewportWidth;
  mainCanvas.height = viewportHeight;
}

/**
 * Particle Spawning
 */

function createRockets () {
  for (let i = 0; i < 5; i++) {
    createRocket();
  }
  if (allowNewAnimation) {
    allowNewAnimation = false;
    update();
  }
}

function createRocket () {

  const posX = viewportWidth * 0.5;
  const posY = viewportHeight + 10;
  const velX = Math.random() * 9 - 4.5;
  const velY = 0;
  const targetX = 0;
  const targetY = 100 + Math.random() * 150;

  const rocket = new Rocket(posX, posY, velX, velY, targetX, targetY);
  particles.push(rocket);

}

/**
 * Animation and State Updating
 */

function update() {
  if (!particles.length) {
    allowNewAnimation = true;
    return;
  }
  clearContext();
  drawParticles();
  raf(update);
}

function clearContext() {
  mainContext.clearRect(0, 0, viewportWidth, viewportHeight);
}

function drawParticles() {
  let num = particles.length;

  while (num--) {

    const particle = particles[num];
    particle.update();

    if (particle.dead()) {

      particles.splice(num, 1);

      if (particle instanceof Rocket) {
        const newParticles = particle.explode();
        particles.push(...newParticles);
      }
    }

    particle.render(mainContext);
  }
}
