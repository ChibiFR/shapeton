import { Graphic } from './Graphic';

export enum CollisionTypes {
  Rectangle,
  Circle
};

export interface ICollider {
  getCollisionType(): CollisionTypes;
  getX(): number;
  getY(): number;
  getWidth(): number;
  getHeight(): number;
  getLineWidth?(): number;
}

export interface ColliderOptions {
  collisionType?: CollisionTypes;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export class Collider extends Graphic implements ICollider {
  protected readonly collisionType: CollisionTypes;
  protected width: number;
  protected height: number;

  constructor(options?: ColliderOptions) {
    options = options || {};

    super(options);
    this.collisionType = options.collisionType || CollisionTypes.Rectangle;
    this.width = options.width || 0;
    this.height = options.height || 0;
  }

  public getCollisionType(): CollisionTypes {
    return this.collisionType;
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
}
