import { Map } from '../utils';
import { Keys } from './Keys';

export abstract class Keyboard {
  protected static keys: Map<boolean>;
  protected static preventDefaults: Keys[];

  public static _init(): void {
    this.keys = new Map<boolean>();
    this.preventDefaults = [];

    window.addEventListener('keydown', (e: KeyboardEvent): void => {
      this.keys.set(e.code, true);

      for (const preventDefault of this.preventDefaults) {
        if (preventDefault === e.code) e.preventDefault();
      }
    });

    window.addEventListener('keyup', (e: KeyboardEvent): void => {
      this.keys.set(e.code, false);

      for (const preventDefault of this.preventDefaults) {
        if (preventDefault === e.code) e.preventDefault();
      }
    });

    window.addEventListener('blur', (e: Event): void => {
      for (const key of this.keys.getKeys()) {
        this.keys.set(key, false);
      }
    });
  }

  public static preventDefault(keys: Keys|Keys[]): void {
    if (typeof keys === 'string') {
      this.preventDefaults.push(keys);
    } else {
      for (const key of <Keys[]>keys) {
        this.preventDefaults.push(key);
      }
    }
  }

  public static getKey(key: Keys): boolean {
    return this.keys.get(key) || false;
  }

  public static keyDown(key: Keys): boolean {
    return this.getKey(key) === true;
  }

  public static keyUp(key: Keys): boolean {
    return this.getKey(key) === false;
  }

  public static keysDown(keys: Keys[]): boolean {
    for (const key of keys) {
      if (this.keys.get(key) !== true) return false;
    }

    return true;
  }

  public static keysUp(keys: Keys[]): boolean {
    for (const key of keys) {
      if (this.keys.get(key) === true) return false;
    }

    return true;
  }
}

Keyboard._init();
