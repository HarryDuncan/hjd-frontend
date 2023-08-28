import { useCallback } from "react";
import { CARD_GALLERY_TYPE } from "./scroll-card-gallery.consts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const GRID_GAP = "8rem";
const ROTATION_X = 50;
export const useScrollCardAnimation = (scrollType) => {
  gsap.registerPlugin(ScrollTrigger);
  return useCallback(
    (grid) => {
      const gridWrap = grid.childNodes;
      const gridItems = gridWrap[0].childNodes;
      if (!gridWrap || !gridItems) return;
      // Define GSAP timeline with ScrollTrigger
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: grid,
          start: "top bottom+=5%",
          end: "bottom top-=5%",
          scrub: true,
        },
      });
      switch (scrollType) {
        case CARD_GALLERY_TYPE.WAVE_LEFT:
          grid.style.setProperty("--grid-width", "50%");
          grid.style.setProperty("--perspective", "50000px");
          grid.style.setProperty("--grid-item-ratio", "0.8");
          grid.style.setProperty("--grid-columns", "3");
          grid.style.setProperty("--grid-gap", GRID_GAP);
          timeline.set(gridWrap, {
            transformOrigin: "0% 50%",
            rotationY: 30,
            xPercent: -45,
          });

          if (gridItems) {
            timeline
              .set(gridItems, {
                transformOrigin: "50% 0%",
              })
              .to(
                gridItems,
                {
                  duration: 0.5,
                  ease: "power2",
                  z: 300,
                  stagger: 0.04,
                },
                0
              )
              .to(
                gridItems,
                {
                  duration: 0.5,
                  ease: "power2.in",
                  z: 0,
                  stagger: 0.04,
                },
                0.5
              )
              .fromTo(
                gridItems,
                {
                  rotationX: -1 * ROTATION_X,
                  filter: "brightness(120%)",
                },
                {
                  duration: 1,
                  rotationX: ROTATION_X,
                  filter: "brightness(0%)",
                  stagger: 0.04,
                },
                0
              );
          }

          break;
        case CARD_GALLERY_TYPE.WAVE_RIGHT:
        default:
          grid.style.setProperty("--grid-width", "50%");
          grid.style.setProperty("--perspective", "-5000px");
          grid.style.setProperty("--grid-item-ratio", "0.8");
          grid.style.setProperty("--grid-columns", "3");
          grid.style.setProperty("--grid-gap", GRID_GAP);
          timeline.set(gridWrap, {
            transformOrigin: "0% 50%",
            rotationY: -30,
            xPercent: 75,
          });
          if (gridItems) {
            timeline
              .set(gridItems, {
                transformOrigin: "50% 0%",
              })
              .to(
                gridItems,
                {
                  duration: 0.5,
                  ease: "power2",
                  z: 500,
                  stagger: 0.04,
                },
                0
              )
              .to(
                gridItems,
                {
                  duration: 0.5,
                  ease: "power2.in",
                  z: 0,
                  stagger: 0.04,
                },
                0.5
              )
              .fromTo(
                gridItems,
                {
                  rotationX: -70,
                  filter: "brightness(120%)",
                },
                {
                  duration: 1,
                  rotationX: 70,
                  filter: "brightness(0%)",
                  stagger: 0.04,
                },
                0
              );
          }
          break;
      }
    },
    [scrollType]
  );
};
