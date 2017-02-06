import Particle from 'src/js/particles/particle';
import Freefall from 'src/js/particles/freefall';

export default class Rocket extends Particle {

  constructor (posX, posY, velX, velY, targetX = 0, targetY = 0) {
    super(posX, posY, velX, velY);

    this.targetX = targetX;
    this.targetY = targetY;
    this.easing  = Math.random() * 0.02;
  }

  update () {
    const distance = this.targetY - this.posY;

    this.velY = distance * (0.03 + this.easing);
    this.life = Math.min(distance * distance * 0.00005, 1);

    super.update();
  }

  explode () {
    let count = 100;
    const angle = (Math.PI * 2) / count;
    const particles = [];

    while (count--) {
      const particleAngle = count * angle;
      const randomScalar = 4 + Math.random() * 4;
      const velX = Math.cos(particleAngle) * randomScalar;
      const velY = Math.sin(particleAngle) * randomScalar
      const particle = new Freefall(this.posX, this.posY, velX, velY);
      particles.push(particle);
    }

    return particles;
  }

}
