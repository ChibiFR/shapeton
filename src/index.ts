import { Renderer, Time } from './rendering';
import { Rectangle, Label, Colour } from './graphics';
import { Keyboard, Keys, Mouse } from './inputs';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const renderer: Renderer = new Renderer(<CanvasRenderingContext2D>canvas.getContext('2d'));

const purple: Colour = new Colour({
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
  colour: purple,
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

  const { w, h, s }: { [key: string]: number } = {
    w: rect.getWidth(),
    h: rect.getHeight(),
    s: text.getFontSize()
  };

  if (Mouse.hover(rect)) {
    canvas.style.cursor = 'pointer';

    rect.setWidth(w + 532 * Time.getDeltaTime());
    rect.setHeight(h + 320 * Time.getDeltaTime());
    text.setFontSize(s + 87 * Time.getDeltaTime());

    if (rect.getWidth() > 532) {
      rect.setWidth(540);
    }

    if (rect.getHeight() > 320) {
      rect.setHeight(320);
    }

    if (text.getFontSize() > 87) {
      text.setFontSize(87);
    }
  } else {
    canvas.style.cursor = 'default';

    rect.setWidth(w - 500 * Time.getDeltaTime());
    rect.setHeight(h - 300 * Time.getDeltaTime());
    text.setFontSize(s - 82 * Time.getDeltaTime());

    if (rect.getWidth() < 500) {
      rect.setWidth(500);
    }

    if (rect.getHeight() < 300) {
      rect.setHeight(300);
    }

    if (text.getFontSize() < 82) {
      text.setFontSize(82);
    }
  }

  fps.setText(`FPS: ${Math.round(1000 / Time.getDeltaTime('ms'))}`);
});

renderer.start();
