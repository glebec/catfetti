import Particle from 'src/js/particles/particle';

const GRAVITY = 0.10;

class Freefall extends Particle {

  update () {
    this.velY += GRAVITY;

    this.life -= this.fade;
    if (this.life < 0.5) this.alpha = Math.max(this.life * 2, 0);

    super.update();
  }

}

export default Freefall;
