import Particle from 'src/js/particles/particle';
import Freefall from 'src/js/particles/freefall';

export default class Rocket extends Particle {

  constructor (pos, vel, target = {y: 0}) {
    super(pos, vel);

    this.target = target;
    this.easing  = Math.random() * 0.02;
  }

  update () {
    const distance = this.target.y - this.pos.y;

    this.vel.y = distance * (0.03 + this.easing);
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
      const velocity = {
        x: Math.cos(particleAngle) * randomScalar,
        y: Math.sin(particleAngle) * randomScalar
      };
      const particle = new Freefall(this.pos, velocity);
      particles.push(particle);
    }

    return particles;
  }

}
