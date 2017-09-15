import { Renderer, Time } from './rendering';
import { Graphic, IGraphic } from './graphics';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const renderer: Renderer = new Renderer(<CanvasRenderingContext2D>canvas.getContext('2d'));

class Text extends Graphic implements IGraphic {
  public draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = '#FF00FF';
    context.font = '64px Roboto';
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillText(timeElapsed, this.x, this.y);
  }
}

let timeElapsed: string = '0ms elapsed.';
let text: Text = new Text({
  x: canvas.width / 2,
  y: canvas.height / 2
});

renderer.update(() => {
  timeElapsed = `${Math.round(Time.getTime())}ms elapsed.`;
});

renderer.addGraphic(text);

renderer.start();
