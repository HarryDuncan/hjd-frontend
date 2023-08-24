import { useCallback } from "react";
import { gsap } from "gsap";
import { CHAR_ANIMATIONS } from "./scrollTypeography.consts";

export const useTypographyAnimations = (animationType: string) => {
  return useCallback(
    (title, chars) => {
      switch (animationType) {
        case CHAR_ANIMATIONS.FADE_UP:
          gsap.fromTo(
            chars,
            {
              "will-change": "opacity, transform",
              opacity: 0,
            },
            {
              ease: "power4",
              opacity: 1,
              scale: 1,
              rotation: 0,
              stagger: 0.4,
              scrollTrigger: {
                trigger: title,
                start: "center+=10% bottom",
                end: "+=30%",
                scrub: true,
              },
            }
          );
          break;
        case CHAR_ANIMATIONS.FLASH_IN:
          gsap.fromTo(
            chars,
            {
              "will-change": "opacity, transform",
              opacity: 0,
              scale: 0.6,
              rotationZ: () => gsap.utils.random(-20, 20),
            },
            {
              ease: "power4",
              opacity: 1,
              scale: 1,
              rotation: 0,
              stagger: 0.4,
              scrollTrigger: {
                trigger: title,
                start: "center+=20% bottom",
                end: "+=50%",
                scrub: true,
              },
            }
          );
          break;
        case CHAR_ANIMATIONS.TEST:
          gsap.fromTo(
            chars,
            {
              "will-change": "transform",
              transformOrigin: "50% 0%",
              scaleY: 0,
            },
            {
              ease: "back",
              opacity: 1,
              scaleY: 1,
              yPercent: 0,
              stagger: 0.03,
              scrollTrigger: {
                trigger: title,
                start: "center bottom-=5%",
                end: "top top-=20%",
                scrub: true,
              },
            }
          );
          break;
        case CHAR_ANIMATIONS.MULTI_FLASH:
          gsap.fromTo(
            chars,
            {
              "will-change": "opacity, transform",
              opacity: 0,
              yPercent: 120,
              scaleY: 2.3,
              scaleX: 0.7,
              transformOrigin: "50% 0%",
            },
            {
              duration: 1,
              ease: "back.inOut(2)",
              opacity: 1,
              yPercent: 0,
              scaleY: 1,
              scaleX: 1,
              stagger: 0.03,
              scrollTrigger: {
                trigger: title,
                start: "center bottom+=50%",
                end: "bottom top+=40%",
                scrub: true,
              },
            }
          );
          break;
        case CHAR_ANIMATIONS.FADE_IN_LEFT:
        default: {
          chars.forEach((char) =>
            gsap.set(char.parentNode, { perspective: 1000 })
          );
          gsap.fromTo(
            chars,
            {
              "will-change": "opacity, transform",
              transformOrigin: "50% 0%",
              opacity: 0,
              rotationX: -90,
              z: -200,
            },
            {
              ease: "power1",
              opacity: 1,
              stagger: 0.05,
              rotationX: 0,
              z: 0,
              scrollTrigger: {
                trigger: title,
                start: "center bottom",
                end: "bottom top+=20%",
                scrub: true,
              },
            }
          );
        }
      }
    },
    [animationType]
  );
};
