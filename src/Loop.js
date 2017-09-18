import Game from './Game';

class Loop {
  /**
   * Create a new Loop.
   * @param {CanvasRenderingContext2D} context 
   */
  constructor(context) {
    /**
     * @type {CanvasRenderingContext2D}
     */
    this.context = context;

    /**
     * @type {function[]}
     */
    this.updates = [];

    /**
     * @type {number}
     */
    this.animationFrame = 0;

    /**
     * @type {number}
     */
    this.deltaTime = 0;

    /**
     * @type {number}
     */
    this.time = 0;
  }

  /**
   * A function to run each frame.
   * @param {function} update 
   */
  update(update) {
    this.updates.push(update);
  }

  start() {
    if (!this.animationFrame) {
      this.deltaTime = 0;
      this.time = 0;
      this.animationFrame = requestAnimationFrame((frame) => {
        this.render(frame);
      });
    }
  }

  /**
   * Update and render the scene.
   * @param {number} frame 
   */
  render(frame) {
    this.deltaTime = frame - this.time;
    this.time = frame;

    for (const update of this.updates) {
      update();
    }

    this.context.clearRect(0, 0, Game.width, Game.height);
    
    Game.scene.map.forEach((key, value) => {
      if (!value.visible) return;
      
      value.draw(this.context);
    });

    this.animationFrame = requestAnimationFrame((frame) => {
      this.render(frame);
    });
  }

  stop() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = 0;
    }
  }
}

export default Loop;
