import { Time } from './Time';
import { Graphic } from '../graphics';

export class Renderer {
  protected context: CanvasRenderingContext2D;
  protected updates: Function[];
  protected graphics: Graphic[];
  protected animationFrame: number;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.updates = [];
    this.graphics = [];
    this.animationFrame = 0;
  }

  public getGraphics(): Graphic[] {
    return [...this.graphics];
  }

  public update(update: Function): void {
    this.updates.push(update);
  }

  public addGraphic(graphic: Graphic): void {
    this.graphics.push(graphic);
  }

  public start(): void {
    if (!this.animationFrame) {
      this.animationFrame = requestAnimationFrame((frame: number) => {
        this._render(frame)
      });
    }
  }

  protected _render(frame: number): void {
    Time._setFrame(frame);

    for (const update of this.updates) {
      update();
    }

    for (const graphic of this.graphics) {
      graphic._update();
    }

    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    for (const graphic of this.graphics) {
      if (!graphic.isVisible()) continue;
      
      graphic._draw(this.context);
    }

    this.animationFrame = requestAnimationFrame((frame: number) => {
      this._render(frame);
    });
  }
}
