export const debounce = function (fn: any, timeout: number) {
  let timerId = 0;
  return (...args: any[]) => {
    clearTimeout(timerId);
    timerId = window.setTimeout(() => {
      fn(args);
    }, timeout);
  };
};
