import { Graphic, IGraphic, GraphicOptions } from './Graphic';
import { Animation } from './Animation';
import { IAnimatable, Animator } from './Animator';
import { Colour } from './Colour';

export interface TriangleOptions extends GraphicOptions {
  width?: number;
  height?: number;
  radius?: number;
  fill?: boolean;
  colour?: Colour;
  lineWidth?: number;
}

export class Triangle extends Graphic implements IGraphic, IAnimatable {
  protected width: number;
  protected height: number;
  protected radius: number;
  protected fill: boolean;
  protected colour: Colour;
  protected lineWidth: number;
  protected animator: Animator;

  constructor(options?: TriangleOptions) {
    options = options || {};

    super(options);

    this.width = options.width || 200;
    this.height = options.height || 150;
    this.radius = options.radius || 0;
    this.fill = options.fill !== undefined ? options.fill : true;
    this.colour = options.colour || new Colour();
    this.lineWidth = options.lineWidth !== undefined ? options.lineWidth : 0;
    this.animator = new Animator();
  }

  public setX(x: number): void {
    this.x = x;
  }

  public setY(y: number): void {
    this.y = y;
  }

  public getWidth(): number {
    return this.width;
  }

  public setWidth(width: number): void {
    this.width = width;
  }

  public getHeight(): number {
    return this.height;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public getRadius(): number {
    return this.radius;
  }

  public setRadius(radius: number): number {
    return this.radius;
  }

  public getFill(): boolean {
    return this.fill;
  }

  public setFill(fill?: boolean): void {
    this.fill = fill !== undefined ? fill : true;
  }

  public getColour(): Colour {
    return this.colour;
  }

  public setColour(colour: Colour) {
    return this.colour;
  }

  public getLineWidth(): number {
    return this.lineWidth;
  }

  public setLineWidth(lineWidth: number): void {
    this.lineWidth = lineWidth;
  }

  public getRelativeX(): number {
    return this.x - this.width / 2;
  }

  public setRelativeX(relativeX: number): void {
    this.x = relativeX + this.width / 2;
  }

  public getRelativeY(): number {
    return this.y - this.height / 2;
  }

  public setRelativeY(relativeY: number): void {
    this.y = relativeY + this.height / 2;
  }

  public getAnimator(): Animator {
    return this.animator;
  }
  
  public setAnimator(animator: Animator): void {
    this.animator = animator;
  }

  public getAnimation(animationName: string): Animation {
    let animation: Animation|null = this.animator.getAnimation(animationName);

    if (animation === null) {
      animation = new Animation(0, 0, 0, 0, 0);

      this.animator.setAnimation('', animation);
    }

    return animation;
  }

  public setAnimation(animationName: string, animation: Animation): void {
    this.animator.setAnimation(animationName, animation);
  }

  public _draw(context: CanvasRenderingContext2D): void {
    this.animator.animate(this);
    
    const { rx, ry, x0, y0, x1, y1, x2, y2 }: { [key: string]: number } = {
      rx: this.x,
      ry: this.y,
      x0: this.x + this.width / 4,
      y0: this.y,
      x1: this.x,
      y1: this.y + this.height / 2,
      x2: this.x - this.width / 4,
      y2: this.y
    };

    context.beginPath();
    context.moveTo(x0, y0);
    context.arcTo(rx + this.width / 2, ry + this.height / 2, x1, y1, this.radius);
    context.arcTo(rx - this.width / 2, ry + this.height / 2, x2, y2, this.radius);
    context.arcTo(rx, ry - this.height / 2, x0, y0, this.radius);
    context.closePath();

    if (this.fill) {
      context.fillStyle = this.colour.toRGBAString();
      context.fill();
    } else {
      context.lineWidth = this.lineWidth;
      context.strokeStyle = this.colour.toRGBAString();
      context.stroke();
    }
  }
}
