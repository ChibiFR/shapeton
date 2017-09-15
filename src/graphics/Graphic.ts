export interface IGraphic {
  getX: () => number;
  getY: () => number;
  draw: (context: CanvasRenderingContext2D) => void;
};

export interface GraphicOptions {
  x?: number;
  y?: number;
}

export abstract class Graphic implements IGraphic {
  protected x: number;
  protected y: number;

  constructor(options: GraphicOptions) {
    this.x = options.x || 0;
    this.y = options.y || 0;
  }

  public getX(): number {
    return this.x;
  }

  public setX(x: number): void {
    this.x = x;
  }

  public getY(): number {
    return this.y;
  }

  public setY(y: number): void {
    this.y = y;
  }

  public draw(context: CanvasRenderingContext2D): void {
  }
}
