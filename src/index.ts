const canvas: HTMLCanvasElement =  <HTMLCanvasElement>document.querySelector('canvas');
const context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#000000';
context.lineWidth = 4;

context.beginPath();
context.moveTo(canvas.width / 2 - 50 + 20, canvas.height / 2 - 25);

context.lineTo(canvas.width / 2 + 50 - 20, canvas.height / 2 - 25);
context.arcTo(
  canvas.width / 2 + 50,
  canvas.height / 2 - 25,
  canvas.width / 2 + 50,
  canvas.height / 2 - 25 + 20,
  20
);

context.lineTo(canvas.width / 2 + 50, canvas.height / 2 + 25 - 20);
context.arcTo(
  canvas.width / 2 + 50,
  canvas.height / 2 + 25,
  canvas.width / 2 + 50 - 20,
  canvas.height / 2 + 25,
  20
);

context.lineTo(canvas.width / 2 - 50 + 20, canvas.height / 2 + 25);
context.arcTo(
  canvas.width / 2 - 50,
  canvas.height / 2 + 25,
  canvas.width / 2 - 50,
  canvas.height / 2 + 25 - 20,
  20
);

context.lineTo(canvas.width / 2 - 50, canvas.height / 2 - 25 + 20);
context.arcTo(
  canvas.width / 2 - 50,
  canvas.height / 2 - 25,
  canvas.width / 2 - 50 + 20,
  canvas.height / 2 - 25,
  20
);

context.stroke();
