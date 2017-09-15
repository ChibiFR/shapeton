import { Renderer, Time } from './rendering';
import { Rectangle, Label } from './graphics';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const renderer: Renderer = new Renderer(<CanvasRenderingContext2D>canvas.getContext('2d'));

const rect = new Rectangle({
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 500,
  height: 300,
  radius: 40,
  colour: '#FF00FF',
  fill: false,
  lineWidth: 8
});

const text = new Label({
  text: 'Shapeton',
  x: rect.getX(),
  y: rect.getY(),
  fontFamily: 'Roboto',
  fontSize: 82,
  fontWeight: 'lighter',
  colour: '#222222'
});

renderer.addGraphic(rect);
renderer.addGraphic(text);

renderer.start();
