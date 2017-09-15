import { Graphic, IGraphic, GraphicOptions } from './Graphic';

export type FontStyle = 'normal'|'italic'|'oblique';
export type FontVariant = 'normal'|'small-caps';
export type FontWeight = 'normal'|'bold'|'bolder'|'lighter'|100|200|300|400|500|600|700|800|900;
export type LabelMaxWidth = number|'auto';

export interface LabelOptions extends GraphicOptions {
  text?: string;
  fontStyle?: FontStyle;
  fontVariant?: FontVariant;
  fontWeight?: FontWeight;
  fontSize?: number;
  fontFamily?: string;
  maxWidth?: LabelMaxWidth;
  fill?: boolean;
  colour?: string;
}

export class Label extends Graphic implements IGraphic {
  protected text: string;
  protected fontStyle: FontStyle;
  protected fontVariant: FontVariant;
  protected fontWeight: FontWeight;
  protected fontSize: number;
  protected fontFamily: string;
  protected maxWidth: LabelMaxWidth;
  protected fill: boolean;
  protected colour: string;

  constructor(options?: LabelOptions) {
    options = options || {};

    super(options);
    this.text = options.text || '';
    this.fontStyle = options.fontStyle || 'normal';
    this.fontVariant = options.fontVariant || 'normal';
    this.fontWeight = options.fontWeight || 'normal';
    this.fontSize = options.fontSize !== undefined ? options.fontSize : 12;
    this.fontFamily = options.fontFamily || 'Arial';
    this.maxWidth = options.maxWidth !== undefined ? options.maxWidth : 'auto';
    this.fill = options.fill !== undefined ? options.fill : true;
    this.colour = options.colour || '#000000';
  }

  public getText(): string {
    return this.text;
  }

  public setText(text: string): void {
    this.text = text;
  }

  public getFontStyle(): FontStyle {
    return this.fontStyle;
  }

  public setFontStyle(fontStyle: FontStyle): void {
    this.fontStyle = fontStyle;
  }

  public getFontVariant(fontVariant: FontVariant): void {
    this.fontVariant = fontVariant;
  }

  public getFontWeight(): FontWeight {
    return this.fontWeight;
  }

  public setFontWeight(fontWeight: FontWeight): void {
    this.fontWeight = fontWeight;
  }

  public getFontSize(): number {
    return this.fontSize;
  }

  public setFontSize(fontSize: number): void {
    this.fontSize = fontSize;
  }

  public getFontFamily(): string {
    return this.fontFamily;
  }

  public setFontFamily(fontFamily: string): void {
    this.fontFamily = fontFamily;
  }

  public getMaxWidth(): LabelMaxWidth {
    return this.maxWidth;
  }

  public setMaxWidth(maxWidth: LabelMaxWidth): void {
    this.maxWidth;
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

  public _draw(context: CanvasRenderingContext2D): void {
    const maxWidth = this.maxWidth !== 'auto' ? this.maxWidth : undefined;

    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = (
      `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`
  );

    if (this.fill) {
      context.fillStyle = this.colour;
      context.fillText(this.text, this.x, this.y, maxWidth);
    } else {
      context.strokeStyle = this.colour;
      context.strokeText(this.text, this.x, this.y, maxWidth);
    }
  }
}
