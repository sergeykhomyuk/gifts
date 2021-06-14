export const numericSorter = <T>(getProperty: (value: T) => number) => (
  a: T,
  b: T
) => getProperty(a) - getProperty(b);

export const stringSorter = <T>(getProperty: (value: T) => string) => (
  a: T,
  b: T
) => (getProperty(a) < getProperty(b) ? 1 : -1);
