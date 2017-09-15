export type Cursor = { x: number, y: number };

export abstract class Mouse {
  protected static cursor: Cursor;
  protected static buttonDown: boolean;

  public static _init(): void {
    this.cursor = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    this.buttonDown = false;

    // Mouse events
    window.addEventListener('mousemove', (e: MouseEvent): void => {
      this.cursor.x = e.clientX;
      this.cursor.y = e.clientY;
    });

    window.addEventListener('mousedown', (e: MouseEvent): void => {
      this.buttonDown = e.button === 0;
    });

    window.addEventListener('mouseup', (e: MouseEvent): void => {
      this.buttonDown = e.button === 0;
    });

    // Touch events
    window.addEventListener('touchstart', (e: TouchEvent): void => {
      this.buttonDown = true;
    });

    window.addEventListener('touchmove', (e: TouchEvent): void => {
      e.preventDefault();
    });

    window.addEventListener('touchend', (e: TouchEvent): void => {
      this.buttonDown = false;
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

  public static isButtonDown(): boolean {
    return this.buttonDown;
  }
}

Mouse._init();
