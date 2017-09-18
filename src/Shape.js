class Shape {
  /**
   * Create a new Shape.
   * @param {Point} point 
   * @param {Dimension} dimension 
   * @param {string} [colour] 
   * @param {boolean} [fill] 
   * @param {boolean} [visible] 
   */
  constructor(point, dimension, colour = '#000000', fill = true, visible = true) {
    /**
     * Center of the shape.
     * @type {Point}
     */
    this.point = point;

    /**
     * Width/height of the shape.
     * @type {Dimension}
     */
    this.dimension = dimension;

    /**
     * Colour of the shape.
     * @type {string}
     */
    this.colour = colour;

    /**
     * Fill or stroke the shape.
     * @type {boolean}
     */
    this.fill = fill;

    /**
     * Set the shape as visible or not.
     * @type {boolean}
     */
    this.visible = visible;
  }

  /**
   * The x point (get in pixels, set in percentage).
   * @type {number}
   */
  get x() {
    return this.point.x;
  }

  set x(x) {
    this.point.x = x;
  }

  /**
   * The y point (get in pixels, set in percentage).
   * @type {number}
   */
  get y() {
    return this.point.y;
  }

  set y(y) {
    this.point.y = y;
  }

  /**
   * The width (get in pixels, set in percentage).
   * @type {number}
   */
  get width() {
    return this.dimension.width;
  }

  set width(width) {
    this.dimension.width = width;
  }

  /**
   * The height (get in pixels, set in percentage).
   * @type {number}
   */
  get height() {
    return this.dimension.height;
  }

  set height(height) {
    this.dimension.height = height;
  }

  /**
   * Draw the shape to the canvas.
   * @param {CanvasRenderingContext2D} context 
   */
  draw(context) {
  }
}

export default Shape;
