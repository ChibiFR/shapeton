import { FontMetrix } from '../utils';

export type FontStyle = 'normal'|'italic'|'oblique';
export type FontVariant = 'normal'|'small-caps';
export type FontWeight = 'normal'|'bold'|'bolder'|'lighter'|100|200|300|400|500|600|700|800|900;

export type JSONFont = {
  style: FontStyle,
  variant: FontVariant,
  weight: FontWeight,
  size: number,
  family: string
};

export interface FontOptions {
  style?: FontStyle;
  variant?: FontVariant;
  weight?: FontWeight;
  size?: number;
  family?: string;
}

export class Font {
  protected style: FontStyle;
  protected variant: FontVariant;
  protected weight: FontWeight;
  protected size: number;
  protected family: string;

  constructor(options?: FontOptions) {
    options = options || {};

    this.style = options.style || 'normal';
    this.variant = options.variant || 'normal';
    this.weight = options.weight || 'normal';
    this.size = options.size !== undefined ? options.size : 12;
    this.family = options.family || 'Arial';
  }
  
  public getStyle(): FontStyle {
    return this.style;
  }

  public setStyle(style: FontStyle): void {
    this.style = style;
  }

  public getVariant(): FontVariant {
    return this.variant;
  }

  public setVariant(variant: FontVariant): void {
    this.variant = variant;
  }

  public getWeight(): FontWeight {
    return this.weight;
  }

  public setWeight(weight: FontWeight): void {
    this.weight = weight;
  }

  public getSize(): number {
    return this.size;
  }

  public setSize(size: number): void {
    this.size = size;
  }

  public getFamily(): string {
    return this.family;
  }

  public setFamily(family: string): void {
    this.family = family;
  }
  
  public measure(text: string): number {
    return FontMetrix.measure(text, this);
  }

  public toString(): string {
    return `${this.style} ${this.variant} ${this.weight} ${this.size}px ${this.family}`;
  }

  public toJSON(): JSONFont {
    return {
      style: this.style,
      variant: this.variant,
      weight: this.weight,
      size: this.size,
      family: this.family
    };
  }

  public fromJSON(jsonFont: JSONFont): this {
    this.style = jsonFont.style;
    this.variant = jsonFont.variant;
    this.weight = jsonFont.weight;
    this.size = jsonFont.size;
    this.family = jsonFont.family;

    return this;
  }
}
