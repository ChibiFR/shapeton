import { Renderer, Time } from './rendering';
import { Rectangle, Label } from './graphics';
import { Keyboard, Keys } from './inputs';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const renderer: Renderer = new Renderer(<CanvasRenderingContext2D>canvas.getContext('2d'));

const rect: Rectangle = new Rectangle({
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 500,
  height: 300,
  radius: 40,
  colour: '#FF00FF',
  fill: false,
  lineWidth: 8
});

const text: Label = new Label({
  x: rect.getX(),
  y: rect.getY(),
  fontFamily: 'Roboto',
  fontSize: 82,
  fontWeight: 'lighter',
  colour: '#222222'
});

renderer.addGraphic(rect);
renderer.addGraphic(text);

renderer.update(() => {
  if (
    Keyboard.keysDown([Keys.Enter, Keys.ControlLeft]) ||
    Keyboard.keysDown([Keys.Enter, Keys.ControlRight])
  ) {
    text.setText('Ctrl + Enter');
  } else if (Keyboard.keyDown(Keys.ControlLeft) || Keyboard.keyDown(Keys.ControlRight)) {
    text.setText('Ctrl');
  } else if (Keyboard.keyDown(Keys.Enter)) {
    text.setText('Enter');
  } else {
    text.setText('');
  }
});

renderer.start();
