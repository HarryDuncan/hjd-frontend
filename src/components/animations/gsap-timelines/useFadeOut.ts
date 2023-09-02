import { useCallback } from "react";
import { gsap } from "gsap";

export const useFadeOut = () =>
  useCallback((element: HTMLElement) => {
    const tl = gsap.timeline();
    tl.to(element, { opacity: 0, duration: 1 });
    tl.play();
  }, []);
