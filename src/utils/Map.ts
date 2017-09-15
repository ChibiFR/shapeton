export type KeyType = string|number;

export class Map<T> {
  protected keys: KeyType[];
  protected values: T[];

  constructor() {
    this.keys = [];
    this.values = [];
  }

  public getKeys(): KeyType[] {
    return this.keys.slice();
  }

  public getValues(): T[] {
    return [...this.values];
  }

  public get(key: KeyType): T|null {
    const index: number = this.keys.indexOf(key);

    if (index !== -1) {
      return this.values[index];
    }

    return null;
  }

  public set(key: KeyType, value: T): void {
    const index: number = this.keys.indexOf(key);

    if (index === -1) {
      this.keys.push(key);
      this.values.push(value);
    } else {
      this.values[index] = value;
    }
  }

  public delete(key: KeyType): boolean {
    const index: number = this.keys.indexOf(key);

    if (key !== -1) {
      this.keys.splice(index, 1);
      this.values.splice(index, 1);

      return true;
    }

    return false;
  }

  public hasKey(key: KeyType): boolean {
    return this.keys.indexOf(key) !== -1;
  }

  public hasValue(value: T): boolean {
    return this.values.indexOf(value) !== -1;
  }
}
