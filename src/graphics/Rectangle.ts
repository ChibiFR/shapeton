import { Graphic, IGraphic, GraphicOptions } from './Graphic';
import { ICollider, CollisionTypes } from './Collider'
import { Animation } from './Animation';
import { IAnimatable, Animator } from './Animator';
import { Colour } from './Colour';

export interface RectangleOptions extends GraphicOptions {
  width?: number;
  height?: number;
  radius?: number;
  fill?: boolean;
  colour?: Colour;
  lineWidth?: number;
}

export class Rectangle extends Graphic implements IGraphic, ICollider, IAnimatable {
  protected readonly collisionType: CollisionTypes;
  protected width: number;
  protected height: number;
  protected radius: number;
  protected fill: boolean;
  protected colour: Colour;
  protected lineWidth: number;
  protected animator: Animator;

  constructor(options?: RectangleOptions) {
    options = options || {};

    super(options);

    this.collisionType = CollisionTypes.Rectangle;
    this.width = options.width || 200;
    this.height = options.height || 150;
    this.radius = options.radius || 0;
    this.fill = options.fill !== undefined ? options.fill : true;
    this.colour = options.colour || new Colour();
    this.lineWidth = options.lineWidth !== undefined ? options.lineWidth : 0;
    this.animator = new Animator();
  }
  
  public getCollisionType(): CollisionTypes {
    return this.collisionType;
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

  public setColour(colour: Colour): void {
    this.colour = colour;
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
    if (this.radius === 0) {
      this._drawRect(context);
    } else {
      this._drawRoundedRect(context);
    }
  }

  protected _drawRect(context: CanvasRenderingContext2D): void {
    if (this.fill) {
      context.fillStyle = this.colour.toRGBAString();
      context.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    } else {
      context.lineWidth = this.lineWidth;
      context.strokeStyle = this.colour.toRGBAString();
      context.strokeRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }
  }

  protected _drawRoundedRect(context: CanvasRenderingContext2D): void {
    const { x0, x1, y0, y1 }: { [key: string]: number } = {
      x0: this.x - this.width / 2,
      x1: this.x + this.width / 2,
      y0: this.y - this.height / 2,
      y1: this.y + this.height / 2
    };

    context.beginPath();
    context.moveTo(x0 + this.radius, y0);
    context.lineTo(x1 - this.radius, y0);
    context.arcTo(x1, y0, x1, y0 + this.radius, this.radius);
    context.lineTo(x1, y1 - this.radius);
    context.arcTo(x1, y1, x1 - this.radius, y1, this.radius);
    context.lineTo(x0 + this.radius, y1);
    context.arcTo(x0, y1, x0, y1 - this.radius, this.radius);
    context.lineTo(x0, y0 + this.radius);
    context.arcTo(x0, y0, x0 + this.radius, y0, this.radius);

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
