export type RGBColour = { r: number, g: number, b: number };
export type RGBAColour = { r: number, g: number, b: number, a: number };

export interface ColourOptions {
  red?: number;
  green?: number;
  blue?: number;
  alpha?: number
};

export class Colour {
  protected red: number;
  protected green: number;
  protected blue: number;
  protected alpha: number;

  constructor(options?: ColourOptions) {
    options = options || {};

    this.red = options.red ? this.clampColour(options.red) : 0;
    this.green = options.green ? this.clampColour(options.green) : 0;
    this.blue = options.blue ? this.clampColour(options.blue): 0;
    this.alpha = options.alpha !== undefined ? this.clampAlpha(options.alpha) : 1;
  }

  public getRed(): number {
    return this.red;
  }

  public setRed(red: number): void {
    this.red = this.clampColour(this.red);
  }

  public getGreen(): number {
    return this.green;
  }

  public setGreen(green: number): void {
    this.green = this.clampColour(green);
  }

  public getBlue(): number {
    return this.blue;
  }

  public setBlue(blue: number): void {
    this.blue = this.clampColour(blue);
  }

  public getAlpha(): number {
    return this.alpha;
  }
  
  public setAlpha(alpha: number): void {
    this.alpha = this.clampAlpha(alpha);
  }

  public toString(format?: 'rgb'|'rgba'): string {
    format = format || 'rgba';

    if (format === 'rgba') {
      return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }

    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  public toRGBString(): string {
    return this.toString('rgb');
  }

  public toRGBAString(): string {
    return this.toString('rgba');
  }

  public toJSON(format?: 'rgb'|'rgba'): RGBColour|RGBAColour {
    format = format || 'rgba';

    if (format === 'rgba') {
      return {
        r: this.red,
        g: this.green,
        b: this.blue,
        a: this.alpha
      };
    }

    return {
      r: this.red,
      g: this.green,
      b: this.blue
    };
  }

  public fromJSON(colour: RGBColour|RGBAColour): void {
    this.red = this.clampColour(colour.r);
    this.green = this.clampColour(colour.g);
    this.blue = this.clampColour(colour.b);
    this.alpha = (
      this.clampAlpha((<RGBAColour>colour).a !== undefined ? (<RGBAColour>colour).a : 1)
    );
  }

  protected clampColour(colour: number): number {
    if (colour > 255) {
      return 255;
    } else if (colour < 0) {
      return 0;
    } else {
      return colour;
    }
  }

  protected clampAlpha(alpha: number): number {
    if (alpha > 1) {
      return 1;
    } else if (alpha < 0) {
      return 0;
    } else {
      return alpha;
    }
  }
}
