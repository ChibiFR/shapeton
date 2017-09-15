import { Renderer, Time } from './rendering';
import { Rectangle, Label, Colour } from './graphics';
import { Keyboard, Keys, Mouse } from './inputs';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const renderer: Renderer = new Renderer(<CanvasRenderingContext2D>canvas.getContext('2d'));

const lighter: Colour = new Colour({
  red: 0xff,
  green: 0x88,
  blue: 0xff
});

const darker: Colour = new Colour({
  red: 0xff,
  green: 0x00,
  blue: 0xff
});

const dark: Colour = new Colour({
  red: 0x22,
  green: 0x22,
  blue: 0x22
});

const rect: Rectangle = new Rectangle({
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 500,
  height: 300,
  radius: 40,
  colour: lighter,
  fill: false,
  lineWidth: 8
});

const text: Label = new Label({
  x: rect.getX(),
  y: rect.getY(),
  fontFamily: 'Roboto',
  fontSize: 82,
  fontWeight: 'lighter',
  colour: dark
});

const fps: Label = new Label({
  x: 50,
  y: 20,
  fontFamily: 'Roboto',
  fontSize: 14,
  colour: dark
});

renderer.addGraphic(rect);
renderer.addGraphic(text);
renderer.addGraphic(fps);

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
    rect.setColour(darker);
  } else {
    rect.setColour(lighter);
  }

  fps.setText(`FPS: ${Math.round(1000 / Time.getDeltaTime())}`);
});

renderer.start();
