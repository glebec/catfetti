import randomKittyImage from 'src/js/data/kitties';
import drawRotatedImage from 'src/js/utils/draw-rotated';

class Particle {

  constructor (posX = 0, posY = 0, velX = 0, velY = 0) {
    this.marker = randomKittyImage();
    this.alpha = 1;
    this.scale = Math.random() / 2 + 0.5;
    this.aim = Math.random() > 0.5 ? 1 : -1;

    this.posX = posX;
    this.posY = posY;
    this.velX = velX;
    this.velY = velY;

    this.life = 1;
    this.fade = Math.random() * 0.15 + 0.003;
  }

  update () {
    this.posX += this.velX;
    this.posY += this.velY;
  }

  dead () {
    return this.life < 0.005;
  }

  render (context) {
    const angle = this.aim * (this.posX + this.posY) % 360;
    drawRotatedImage.call(context, this.marker, {
      x: this.posX,
      y: this.posY,
      angle,
      alpha: this.alpha,
      scale: this.scale
    });
  }

}

export default Particle;
