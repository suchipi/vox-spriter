import { useEffect, useLayoutEffect, useRef } from "react";

// Tweaked from https://github.com/facebook/react/issues/14195#issuecomment-437942016
export default function useAnimationFrame(callback) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const frameRef = useRef();

  const loop = (elapsedTime) => {
    frameRef.current = requestAnimationFrame(loop);

    const cb = callbackRef.current;
    cb(elapsedTime);
  };

  useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, []);
}
