import { Renderer, Time } from './rendering';
import { Rectangle, Label } from './graphics';
import { Keyboard, Keys, Mouse } from './inputs';

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
  const ctrl = Keyboard.keyDown(Keys.ControlLeft) || Keyboard.keyDown(Keys.ControlRight);
  const enter = Keyboard.keyDown(Keys.Enter) || Keyboard.keyDown(Keys.NumpadEnter);

  if (ctrl && enter) {
    text.setText('Ctrl + Enter');
  } else if (ctrl) {
    text.setText('Ctrl');
  } else if (enter) {
    text.setText('Enter');
  } else {
    text.setText('');
  }

  if (Mouse.hover(rect)) {
    rect.setColour('#FF00FF');
  } else {
    rect.setColour('#FF88FF');
  }
});

renderer.start();
