import { Graphic, IGraphic, GraphicOptions } from './Graphic';
import { Animation } from './Animation';
import { IAnimatable, Animator } from './Animator';
import { Colour } from './Colour';
import { Font, FontStyle, FontVariant, FontWeight } from './Font';

export type LabelMaxWidth = number|'auto';

export interface LabelOptions extends GraphicOptions {
  text?: string;
  font?: Font;
  maxWidth?: LabelMaxWidth;
  fill?: boolean;
  colour?: Colour;
}

export class Label extends Graphic implements IGraphic, IAnimatable {
  protected text: string;
  protected font: Font;
  protected maxWidth: LabelMaxWidth;
  protected fill: boolean;
  protected colour: Colour;
  protected animator: Animator;

  constructor(options?: LabelOptions) {
    options = options || {};

    super(options);
    this.text = options.text || '';
    this.font = options.font || new Font();
    this.maxWidth = options.maxWidth !== undefined ? options.maxWidth : 'auto';
    this.fill = options.fill !== undefined ? options.fill : true;
    this.colour = options.colour || new Colour();
    this.animator = new Animator();
  }

  public getText(): string {
    return this.text;
  }

  public setText(text: string): void {
    this.text = text;
  }

  public getFont(): Font {
    return this.font;
  }

  public setFont(font: Font): void {
    this.font = font;
  }

  public getFontStyle(): FontStyle {
    return this.font.getStyle();
  }

  public setFontStyle(fontStyle: FontStyle): void {
    this.font.setStyle(fontStyle);
  }

  public getFontVariant(): FontVariant {
    return this.font.getVariant();
  }

  public setFontVariant(fontVariant: FontVariant): void {
    this.font.setVariant(fontVariant);
  }

  public getFontWeight(): FontWeight {
    return this.font.getWeight();
  }

  public setFontWeight(fontWeight: FontWeight): void {
    this.font.setWeight(fontWeight);
  }

  public getFontSize(): number {
    return this.font.getSize();
  }

  public setFontSize(fontSize: number): void {
    this.font.setSize(fontSize);
  }

  public getFontFamily(): string {
    return this.font.getFamily();
  }

  public setFontFamily(fontFamily: string): void {
    this.font.setFamily(fontFamily);
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

  public getColour(): Colour {
    return this.colour;
  }

  public setColour(colour: Colour): void {
    this.colour = colour;
  }

  public getWidth(): number {
    return this.font.measure(this.text);
  }

  public setWidth(width: number): void {
    this.maxWidth = width;
  }

  public getHeight(): number {
    return this.font.getSize();
  }

  public setHeight(height: number): void {
    this.font.setSize(height);
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
    const maxWidth = this.maxWidth !== 'auto' ? this.maxWidth : undefined;

    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = this.font.toString();

    if (this.fill) {
      context.fillStyle = this.colour.toRGBAString();
      context.fillText(this.text, this.x, this.y, maxWidth);
    } else {
      context.strokeStyle = this.colour.toRGBAString();
      context.strokeText(this.text, this.x, this.y, maxWidth);
    }
  }
}
