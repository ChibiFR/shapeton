export type Resolvable<T> = T|(() => T);

export function resolve<T>(resolvable: Resolvable<T>): T {
  if (typeof resolvable === 'function') {
    return resolvable();
  }

  return resolvable;
}
