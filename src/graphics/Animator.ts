import { Animation, AnimationState } from './Animation';
import { Time } from '../rendering';
import { Map } from '../utils';

export interface IAnimatable extends Animatable {
  getAnimation(animationName: string): Animation;
  setAnimation(animationName: string, animation: Animation): void;
}

export interface Animatable {
  getX(): number;
  setX(x: number): void;
  getY(): number;
  setY(y: number): void;
  getWidth(): number;
  setWidth(width: number): void;
  getHeight(): number;
  setHeight(height: number): void;
  getAnimator(): Animator;
}

export class Animator {
  protected animations: Map<Animation>;

  constructor() {
    this.animations = new Map<Animation>();
  }

  public getAnimation(animationName: string): Animation|null {
    return this.animations.get(animationName);
  }

  public setAnimation(animationName: string, animation: Animation): void {
    this.animations.set(animationName, animation);
  }

  public removeAnimation(animationName: string): boolean {
    return this.animations.delete(animationName);
  }

  public clearAnimations(): void {
    this.animations = new Map<Animation>();
  }

  public animate(animatable: Animatable, animationName?: string): void {
    if (animationName !== undefined) {
      const animation: Animation|null = this.animations.get(animationName);

      if (animation !== null) {
        this._animate(animatable, animation);
      }
    } else {
      for (const animation of this.animations.getValues()) {
        this._animate(animatable, animation);
      }
    }
  }

  protected _animate(animatable: Animatable, animation: Animation): void {
    if (animation.getDuration() === 0) return;

    if (animation.isPlaying()) {
      const deltaTime = Time.getDeltaTime();
      const duration = animation.getDuration();
      
      const current: AnimationState = animation.getCurrentState();
      const end: AnimationState = animation.getEndState();
      const next: AnimationState = {
        x: current.x + ((end.x / deltaTime) / duration),
        y: current.y + ((end.y / deltaTime) / duration),
        width: end.width / (duration / deltaTime),
        height: current.height + ((end.height / deltaTime) / duration)
      };
      
      animatable.setX(animatable.getX() + next.x);
      animatable.setY(animatable.getY() + next.y);
      animatable.setWidth(animatable.getWidth() + next.width);
      animatable.setHeight(animatable.getHeight() + next.height);

      animation._setCurrentState(current);
    }
  }
}
