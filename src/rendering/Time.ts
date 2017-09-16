export type TimeFormat = 'ms'|'s';

export abstract class Time {
  protected static deltaTime: number = 0;
  protected static time: number = 0;

  public static getDeltaTime(timeFormat?: TimeFormat): number {
    timeFormat = timeFormat || 'ms';

    return timeFormat === 's' ? this.deltaTime / 1000 : this.deltaTime;
  }

  public static getTime(timeFormat?: TimeFormat): number {
    timeFormat = timeFormat || 'ms';

    return timeFormat === 's' ? this.time / 1000 : this.time;
  }

  public static _setFrame(frame: number): void {
    this.deltaTime = frame - this.time;
    this.time = frame;
  }
}
