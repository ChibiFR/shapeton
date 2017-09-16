import { Renderer, Time } from './rendering';
import { Rectangle, Label, Font, Animation, Colour } from './graphics';
import { Mouse } from './inputs';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const renderer: Renderer = new Renderer(<CanvasRenderingContext2D>canvas.getContext('2d'));
const roboto = new Font({
  family: 'Roboto',
  size: 82
});

const rect: Rectangle = new Rectangle({
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 500,
  height: 350,
  radius: 30
});

const text: Label = new Label({
  text: `FPS: ${Math.round(1000 / Time.getDeltaTime())}`,
  x: rect.getX(),
  y: rect.getY(),
  font: roboto,
  colour: new Colour({red: 0xff, green: 0xff, blue: 0xff})
});

let mouseenter: boolean = false;
let mouseleave: boolean = false;

rect.setAnimation('grow', new Animation(0, 0, 100, 100, 2));
rect.setAnimation('ungrow', rect.getAnimation('grow').reverse());

text.setAnimation('grow', new Animation(0, 0, 0, 10, 2));
text.setAnimation('ungrow', text.getAnimation('grow').reverse());

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  rect.setX(canvas.width / 2);
  rect.setY(canvas.height / 2);
});

renderer.addGraphic(rect);
renderer.addGraphic(text);

renderer.update(() => {
  text.setText(`FPS: ${Math.round(1000 / Time.getDeltaTime())}`);

  if (mouseenter === false && Mouse.hover(rect)) {
    mouseenter = true;
    mouseleave = false;
    rect.getAnimation('grow').play();
    text.getAnimation('grow').play();
  } else if (mouseenter === true && Mouse.hover(rect) === false) {
    mouseleave = true;
    mouseenter = false
    rect.getAnimation('ungrow').play();
    text.getAnimation('ungrow').play();
  }
});

renderer.start();
