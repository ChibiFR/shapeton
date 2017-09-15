import { Renderer, Time } from './rendering';
import { Rectangle } from './graphics';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const renderer: Renderer = new Renderer(<CanvasRenderingContext2D>canvas.getContext('2d'));

const rect0: Rectangle = new Rectangle({
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 400,
  height: 200,
  fill: false,
  lineWidth: 8,
  colour: '#FF00FF',
  radius: 15
});

const rect1: Rectangle = new Rectangle({
  width: 50,
  height: 50
});

rect1.setRelativeX(20);
rect1.setRelativeY(20);

renderer.addGraphic(rect0);
renderer.addGraphic(rect1);

renderer.start();
