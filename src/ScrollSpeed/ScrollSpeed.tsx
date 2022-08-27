import { FunctionComponent, PropsWithChildren, useCallback, useEffect, useRef } from "react";
import cn from "classnames";
import { getScrollSpeed } from "./scrollSpeedUtils";
import { debounce } from "../utils";
import "./scrollSpeed.css";

interface ScrollSpeedProps {
  className?: string;
  /**
   * degree per second, e.g. a value of `1` will complete full rotation in 1s
   */
  defaultRotationSpeed: number;
  /**
   * default is 1;
   */
  scrollFactor?: number;
  noReverse?: boolean;
}
const MAX_ROTATION_PER_SEC = 1;
export const ScrollSpeed: FunctionComponent<PropsWithChildren<ScrollSpeedProps>> = (props) => {
  const scrollEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentRotationDeg = 0;
    const scrollFactor = 10 / (props.scrollFactor || 1);
    window.addEventListener("scroll", getScrollSpeed);
    // setRotation interval
    setInterval(() => {
      if (scrollEl.current) {
        const additionalSpeedDeg = getScrollSpeed() / scrollFactor;
        let delta =
          additionalSpeedDeg +
          (((props.defaultRotationSpeed * 360) / 10) % 3600000);
        let deltaDir = delta / Math.abs(delta);
        if (props.noReverse) {
          deltaDir = 1;
        }
        delta = deltaDir * Math.max(Math.abs(delta), MAX_ROTATION_PER_SEC);
        const newRotationDeg = currentRotationDeg + delta;
        currentRotationDeg = newRotationDeg;
        scrollEl.current.style.setProperty("--rotate", `${newRotationDeg}deg`);
      }
    }, 100);
  }, []);

  return (
    <>
      <div className={cn("scroll-spy", props.className)} ref={scrollEl}>
        {props.children}
      </div>
    </>
  );
};
