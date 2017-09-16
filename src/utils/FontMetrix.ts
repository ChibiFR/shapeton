import { Font } from '../graphics';

export abstract class FontMetrix {
  protected static context: CanvasRenderingContext2D;

  public static _init() {
    this.context = <CanvasRenderingContext2D>document.createElement('canvas').getContext('2d');
  }

  public static measure(text: string, font: Font): number {
    this.context.font = font.toString();

    return this.context.measureText(text).width;
  }
}

FontMetrix._init();
