import { Renderer, Time } from './rendering';
import { Triangle } from './graphics';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const renderer: Renderer = new Renderer(<CanvasRenderingContext2D>canvas.getContext('2d'));

const triangle0: Triangle = new Triangle({
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 400,
  height: 400,
  fill: false,
  lineWidth: 8,
  colour: '#FF00FF',
  radius: 15
});

const triangle1: Triangle = new Triangle({
  width: 60,
  height: 80
});

triangle1.setRelativeX(20);
triangle1.setRelativeY(20);

renderer.addGraphic(triangle0);
renderer.addGraphic(triangle1);

renderer.start();
