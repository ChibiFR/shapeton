export type AnimationState = {
  x: number,
  y: number,
  width: number,
  height: number
};

export class Animation {
  protected endState: AnimationState;
  protected duration: number;
  protected currentState: AnimationState;
  protected playing: boolean;

  constructor(
    x: number, y: number, width: number, height: number, duration: number) {
    this.endState = {
      x: x,
      y: y,
      width: width,
      height: height
    };
    this.currentState = {...this.endState};
    this.duration = duration;
    this.playing = false;
  }

  public getEndState(): AnimationState {
    return {...this.endState};
  }

  public setEndState(endState: AnimationState): void {
    this.endState = {...endState};
  }
  
  public getDuration(): number {
    return this.duration;
  }

  public setDuration(duration: number): void {
    this.duration = duration;
  }
  
  public getCurrentState(): AnimationState {
    return {...this.currentState};
  }

  public isPlaying(): boolean {
    return this.playing;
  }

  public play(): boolean {
    if (this.playing) return false;

    this.playing = true;

    return true;
  }

  public stop(): boolean {
    if (!this.playing) return false;

    this.playing = false;

    return true;
  }

  public reverse(): Animation {
    return Animation.reverse(this);
  }

  public static reverse(animation: Animation): Animation {
    const end: AnimationState = animation.getEndState();

    return new Animation(
      end.x,
      end.y,
      end.width,
      end.height,
      animation.duration
    );
  }

  public _setCurrentState(currentState: AnimationState): void {
    if (!this.playing) return;

    this.currentState = {...currentState};
    this.playing = (
      this.currentState.x === this.endState.x &&
      this.currentState.y === this.endState.y &&
      this.currentState.width === this.endState.width &&
      this.currentState.height === this.endState.height
    );
  }
}
