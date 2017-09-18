import Game from './Game';

/**
 * Translate points and dimensions from percentage to current
 * value in pixels.
 */
class Layout {
  /**
   * Translate a value from width percentage to pixels.
   * @param {number} width A percentage value.
   * @return {number} The value as pixels.
   */
  static fromWidth(width) {
    return Game.width / (100 / width);
  }

  /**
   * Translate a value from height percentage to pixels.
   * @param {number} height A percentage value.
   * @return {number} The value as pixels.
   */
  static fromHeight(height) {
    return Game.height / (100 / height);
  }
}

export default Layout;
