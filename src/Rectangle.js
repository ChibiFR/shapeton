import Shape from './Shape';

class Rectangle extends Shape {
  /**
   * Create a new Rectangle.
   * @param {Point} point 
   * @param {Dimension} dimension 
   * @param {number} [radius] 
   * @param {string} [colour] 
   * @param {boolean} [fill] 
   * @param {boolean} [visible] 
   */
  constructor(point, dimension, radius = 0, colour, fill, visible) {
    super(point, dimension, colour, fill, visible);
    this.radius = radius;
  }

  /**
   * Draw the rectangle.
   * @param {CanvasRenderingContext2D} context 
   */
  draw(context) {
    const { x, y, width, height, radius } = {
      x: this.x - this.width / 2,
      y: this.y - this.height / 2,
      width: this.width,
      height: this.height,
      radius: this.radius
    };

    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.arcTo(x + width, y, x + width, y + radius, radius);
    context.lineTo(x + width, y + height - radius);
    context.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    context.lineTo(x + radius, y + height);
    context.arcTo(x, y + height, x, y + height - radius, radius);
    context.lineTo(x, y + radius);
    context.arcTo(x, y, x + radius, y, radius);

    if (this.fill) {
      context.fillStyle = this.colour;
      context.fill();
    } else {
      context.strokeStyle = this.colour;
      context.stroke();
    }
  }
}

export default Rectangle;
