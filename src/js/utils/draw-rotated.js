/**
 * Call this function with a canvas 2D context as `this`.
 * http://creativejs.com/2012/01/day-10-drawing-rotated-images-into-canvas/
 */

const RADIANS_PER_DEGREE = Math.PI / 180;

function drawRotatedImage (image, { x, y, angle = 0, scale = 1, alpha = 1 }) {

  this.save();

  this.translate(x, y);

  this.rotate(angle * RADIANS_PER_DEGREE);

  if (typeof alpha === 'number') this.globalAlpha = alpha;

  const scaledWidth = image.width * scale;
  const scaledHeight = image.height * scale;
  const xEdge = -(scaledWidth / 2);
  const yEdge = -(scaledHeight / 2);

  this.drawImage(image, xEdge, yEdge, scaledWidth, scaledHeight);

  this.restore();

}

export default drawRotatedImage;
