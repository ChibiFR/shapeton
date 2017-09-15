import { Graphic, IGraphic, GraphicOptions } from './Graphic';
import { ICollider, CollisionTypes } from './Collider';

export interface CircleOptions extends GraphicOptions {
  size?: number;
  fill?: boolean;
  colour?: string;
  lineWidth?: number;
}

export class Circle extends Graphic implements IGraphic, ICollider {
  protected readonly collisionType: CollisionTypes;
  protected size: number;
  protected fill: boolean;
  protected colour: string;
  protected lineWidth: number;

  constructor(options?: CircleOptions) {
    options = options || {};

    super(options);
    this.collisionType = CollisionTypes.Circle;
    this.size = options.size || 50;
    this.fill = options.fill !== undefined ? options.fill : true;
    this.colour = options.colour || '#000000';
    this.lineWidth = options.lineWidth !== undefined ? options.lineWidth : 0;
  }

  public getCollisionType(): CollisionTypes {
    return this.collisionType;
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

  public getRadius(): number {
    return this.size / 2;
  }

  public setRadius(radius: number): void {
    this.size = radius * 2;
  }

  public getRelativeX(): number {
    return this.x - this.size / 2;
  }

  public setRelativeX(relativeX: number): void {
    this.x = relativeX + this.size / 2;
  }

  public getRelativeY(): number {
    return this.y - this.size / 2;
  }

  public setRelativeY(relativeY: number): void {
    this.y = relativeY + this.size * 2;
  }

  public getWidth(): number {
    return this.size;
  }

  public getHeight(): number {
    return this.size;
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
