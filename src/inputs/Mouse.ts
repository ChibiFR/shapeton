import { ICollider, CollisionTypes } from '../graphics';

export type Cursor = { x: number, y: number };

export abstract class Mouse {
  protected static cursor: Cursor;
  protected static _buttonDown: boolean;

  public static _init(): void {
    this.cursor = {
      x: 0,
      y: 0
    };
    this._buttonDown = false;

    // Mouse events
    window.addEventListener('mousemove', (e: MouseEvent): void => {
      this.cursor.x = e.clientX;
      this.cursor.y = e.clientY;
    });

    window.addEventListener('mousedown', (e: MouseEvent): void => {
      this._buttonDown = e.button === 0;
    });

    window.addEventListener('mouseup', (e: MouseEvent): void => {
      this._buttonDown = e.button === 0;
    });

    // Touch events
    window.addEventListener('touchstart', (e: TouchEvent): void => {
      this._buttonDown = true;
    });

    window.addEventListener('touchmove', (e: TouchEvent): void => {
      e.preventDefault();
    });

    window.addEventListener('touchend', (e: TouchEvent): void => {
      this._buttonDown = false;
    });
  }

  public static getCursor(): Cursor {
    return {...this.cursor};
  }

  public static getX(): number {
    return this.cursor.x;
  }

  public static getY(): number {
    return this.cursor.y;
  }

  public static buttonDown(): boolean {
    return this._buttonDown;
  }

  public static hover(collider: ICollider): boolean {
    const lineWidth = collider.getLineWidth ? collider.getLineWidth() / 2 : 0;
    let hovering: boolean = false;

    switch(collider.getCollisionType()) {
      case CollisionTypes.Rectangle:
        const { x0, y0, x1, y1 }: { [key: string]: number } = {
          x0: collider.getX() - (collider.getWidth() / 2  - lineWidth),
          y0: collider.getY() - (collider.getHeight() / 2  - lineWidth),
          x1: collider.getX() + (collider.getWidth() / 2 + lineWidth),
          y1: collider.getY() + (collider.getHeight() / 2 + lineWidth)
        };

        hovering = (
          this.cursor.x > x0 &&
          this.cursor.y > y0 &&
          this.cursor.x < x1 &&
          this.cursor.y < y1
        );
        break;
      case CollisionTypes.Circle:
        const { x, y }: { [key: string]: number } = {
          x: (collider.getX() - lineWidth) - this.cursor.x,
          y: (collider.getY() - lineWidth) - this.cursor.y
        };
        const { r, d }: { [key: string]: number } = {
          r: collider.getWidth() / 2 + lineWidth,
          d: Math.sqrt(x * x + y * y)
        }

        hovering = (d < (r + 0.5));
        break;
      default:
        break;
    }

    return hovering;
  }
}

Mouse._init();
