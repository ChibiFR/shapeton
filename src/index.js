import Game from './Game';
import Rectangle from './Rectangle';
import Point from './Point';
import Dimension from './Dimension';

const r = new Rectangle(new Point(50, 50), new Dimension(30, 30), 20);
const colours = ['#000000', 'red', 'blue', '#ff00ff', 'green'];

window.addEventListener('keydown', () => {
  r.colour = colours[Math.round(Math.random() * colours.length) - 1];
});

Game.scene.set('rect', r);
Game.start();

window.Game = Game;
