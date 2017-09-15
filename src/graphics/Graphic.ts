export type UpdateFunction = () => void;

export interface IGraphic {
  getX(): number;
  getY(): number;
  isVisible(): boolean;
  update(update: UpdateFunction): void;
  _update(): void;
  _draw(context: CanvasRenderingContext2D): void;
};

export interface GraphicOptions {
  x?: number;
  y?: number;
  visible?: boolean;
}

export abstract class Graphic implements IGraphic {
  protected x: number;
  protected y: number;
  protected visible: boolean;
  protected updates: UpdateFunction[];

  constructor(options?: GraphicOptions) {
    options = options || {};

    this.x = options.x || 0;
    this.y = options.y || 0;
    this.visible = options.visible !== undefined ? options.visible : true;
    this.updates = [];
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

  public getVisible(): boolean {
    return this.visible;
  }

  public setVisible(visible?: boolean): void {
    this.visible = visible !== undefined ? visible : true;
  }

  public isVisible(): boolean {
    return this.visible;
  }

  public update(update: UpdateFunction): void {
    this.updates.push(update);
  }

  public _update(): void {
    for (const update of this.updates) {
      update();
    }
  }

  public _draw(context: CanvasRenderingContext2D): void {
  }
}
