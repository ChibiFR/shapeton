import Scene from './Scene';
import Loop from './Loop';

class Game {
  constructor() {
    /**
     * The canvas which the game is rendered in.
     * @type {HTMLCanvasElement}
     */
    this.canvas = document.querySelector('canvas');

    /**
     * The game scene.
     * @type {Scene}
     */
    this.scene = new Scene();

    /**
     * The game loop.
     * @type {Loop}
     */
    this.loop = new Loop(this.canvas.getContext('2d'));

    window.addEventListener('resize', () => {
      this._resize();
    });

    this._resize();
  }

  /**
   * The width of the canvas.
   * @type {number}
   * @readonly
   */
  get width() {
    return this.canvas.width;
  }

  /**
   * The height of the canvas.
   * @type {number}
   * @readonly
   */
  get height() {
    return this.canvas.height;
  }

  start() {
    this.loop.start();
  }
  
  /**
   * @private
   */
  _resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

export default new Game();
