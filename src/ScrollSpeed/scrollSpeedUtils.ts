import { debounce } from "../utils";

const SCROLL_DIE_TIME = 250;
const scrollSpy = () => {
  let previousScrollPosition = document.documentElement.scrollTop;
  let previousTimeStamp = Date.now();
  let currentScrollSpeed = 0;

  let resetScrollSpyDebounced = () => {};

  const resetScrollSpy = () => {
    console.log("reset");
    console.log({ currentScrollSpeed });
    if (currentScrollSpeed > 0) {
      currentScrollSpeed = Math.floor(currentScrollSpeed / 1.4);
    }
    if (currentScrollSpeed < 0) {
      // to keep rotating in opposite direction
      currentScrollSpeed = Math.ceil(currentScrollSpeed / 1.4);
    }
    if (currentScrollSpeed !== 0) {
      resetScrollSpyDebounced();
    }
  };

  resetScrollSpyDebounced = debounce(resetScrollSpy, SCROLL_DIE_TIME);

  const getScrollSpeed = (e?: Event) => {
    if (e) {
      // triggred by event
      const currentScrollPosition = document.documentElement.scrollTop;
      const delta = currentScrollPosition - previousScrollPosition;
      previousScrollPosition = currentScrollPosition;

      const deltaTime = Date.now() - previousTimeStamp || 1;
      previousTimeStamp = Date.now();

      const speed = (delta / deltaTime) * 1000;
      currentScrollSpeed = speed;
      console.log({ speed });
      resetScrollSpyDebounced();
    }
    return currentScrollSpeed;
  };
  return getScrollSpeed;
};

/**
 * Returns scrollSpeed in pixels/sec
 */
export const getScrollSpeed = scrollSpy();
