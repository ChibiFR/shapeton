import { Graphic, IGraphic, GraphicOptions } from './Graphic';
import { ICollider, CollisionTypes } from './Collider';
import { Animation } from './Animation';
import { IAnimatable, Animator } from './Animator';
import { Colour } from './Colour';

export interface CircleOptions extends GraphicOptions {
  size?: number;
  fill?: boolean;
  colour?: Colour;
  lineWidth?: number;
}

export class Circle extends Graphic implements IGraphic, ICollider, IAnimatable {
  protected readonly collisionType: CollisionTypes;
  protected size: number;
  protected fill: boolean;
  protected colour: Colour;
  protected lineWidth: number;
  protected animator: Animator;

  constructor(options?: CircleOptions) {
    options = options || {};

    super(options);
    this.collisionType = CollisionTypes.Circle;
    this.size = options.size || 50;
    this.fill = options.fill !== undefined ? options.fill : true;
    this.colour = options.colour || new Colour();
    this.lineWidth = options.lineWidth !== undefined ? options.lineWidth : 0;
    this.animator = new Animator();
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

  public setWidth(width: number): void {
    this.size = width;
  }

  public getHeight(): number {
    return this.size;
  }

  public setHeight(height: number): void {
    this.size = height;
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

    context.beginPath();
    context.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);

    if (this.fill) {
      context.fillStyle = this.colour.toRGBAString();
      context.fill();
    } else {
      context.strokeStyle = this.colour.toRGBAString();
      context.lineWidth = this.lineWidth;
      context.stroke();
    }
  }
}
