import Layout from './Layout';

/**
 * Represent a dimension in percentage.
 */
class Dimension {
  constructor(width, height) {
    /**
     * @type {number}
     * @private
     */
    this._width = width;

    /**
     * @type {number}
     * @private
     */
    this._height = height;
  }

  /**
   * The width (get in pixels, set in percentage).
   * @type {number}
   */
  get width() {
    return Layout.fromWidth(this._width);
  }

  set width(width) {
    this._width = width;
  }

  /**
   * The height (get in pixels, set in percentage).
   * @type {number}
   */
  get height() {
    return Layout.fromHeight(this._height);
  }

  set height(height) {
    this._height = height;
  }
}

export default Dimension;
