import { Graphic, IGraphic, GraphicOptions } from './Graphic';

export interface CircleOptions extends GraphicOptions {
  size?: number;
  fill?: boolean;
  colour?: string;
  lineWidth?: number;
}

export class Circle extends Graphic implements IGraphic {
  protected size: number;
  protected fill: boolean;
  protected colour: string;
  protected lineWidth: number;

  constructor(options?: CircleOptions) {
    options = options || {};

    super(options);
    this.size = options.size || 50;
    this.fill = options.fill !== undefined ? options.fill : true;
    this.colour = options.colour || '#000000';
    this.lineWidth = options.lineWidth !== undefined ? options.lineWidth : 1;
  }

  public getSize(): number {
    return this.size;
  }

  public setSize(size: number): void {
    this.size = size;
  }

  public getFill(): boolean {
    return this.fill;
  }

  public setFill(fill?: boolean): void {
    this.fill = fill !== undefined ? fill : true;
  }

  public getColour(): string {
    return this.colour;
  }

  public setColour(colour: string): void {
    this.colour = colour;
  }

  public getLineWidth(): number {
    return this.lineWidth;
  }

  public setLineWidth(lineWidth: number): void {
    this.lineWidth = lineWidth;
  }

  public _draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);

    if (this.fill) {
      context.fillStyle = this.colour;
      context.fill();
    } else {
      context.strokeStyle = this.colour;
      context.lineWidth = this.lineWidth;
      context.stroke();
    }
  }
}
