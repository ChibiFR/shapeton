export abstract class Time {
  protected static deltaTime: number = 0;
  protected static time: number = 0;

  public static getDeltaTime(): number {
    return this.deltaTime;
  }

  public static getTime(): number {
    return this.time;
  }

  public static _setFrame(frame: number): void {
    this.deltaTime - frame - this.time;
    this.time = frame;
  }
}
