/**
 * removes specified keys from object
 *
 * @see https://stackoverflow.com/a/67434028/2284240
 */
export function omit<T extends object, K extends keyof T>(obj: T, ...keys: K[]) {
  for (const key of keys) {
    delete obj[key];
  }
  return obj as unknown as DistributiveOmit<T, K>;
}
