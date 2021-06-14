export const debounce = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  fn: Function,
  timeout: number,
  context = undefined
) => {
  let timer: ReturnType<typeof setTimeout> | undefined = undefined;

  return (...args: unknown[]) => {
    if (timer !== undefined) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => fn.apply(context, args), timeout);
  };
};
