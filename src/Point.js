import Layout from './Layout';

/**
 * Represent a point in percentage.
 */
class Point {
  /**
   * Create a new Point.
   * @param {number} x X value in percentage.
   * @param {number} y Y value in percentage.
   */
  constructor(x, y) {
    /**
     * @type {number}
     * @private
     */
    this._x = x;

    /**
     * @type {number}
     * @private
     */
    this._y = y;
  }

  /**
   * The x value (get in pixels, set in percentage).
   * @type {number}
   */
  get x() {
    return Layout.fromWidth(this._x);
  }

  set x(x) {
    this._x = x;
  }

  /**
   * The y value (get in pixels, set in percentage).
   * @type {number}
   */
  get y() {
    return Layout.fromHeight(this._y);
  }

  set y(y) {
    this._y = y;
  }
}

export default Point;
