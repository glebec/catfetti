import randomKittyImage from 'src/js/data/kitties';
import drawRotatedImage from 'src/js/utils/draw-rotated';

class Particle {

  constructor (pos = {x: 0, y: 0}, vel = {x: 0, y: 0}) {
    this.marker  = randomKittyImage();
    this.alpha   = 1;
    this.fade    = Math.random() * 0.15 + 0.003;
    this.scale   = Math.random() / 2 + 0.5;
    this.aim     = Math.random() > 0.5 ? 1 : -1;

    // particles should have indepedent pos and vel; Object.assign to be safe
    this.pos = Object.assign({}, pos);
    this.vel = Object.assign({}, vel);
    this.life = 1;
  }

  update () {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  dead () {
    return this.life < 0.005;
  }

  render (context) {
    const angle = this.aim * (this.pos.x + this.pos.y) % 360;
    drawRotatedImage.call(context, this.marker, {
      x: this.pos.x,
      y: this.pos.y,
      angle,
      alpha: this.alpha,
      scale: this.scale
    });
  }

}

export default Particle;
