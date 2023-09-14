import { useCallback } from "react";
import { CARD_ANIMATION_TYPE, ROTATION_X } from "../scrollCardGallery.consts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  CardAnimationType,
  ScrollGalleryConfig,
} from "../scrollCardGallery.types";
import { useScrollCardConfig } from "../use-scroll-card-config/useScrollCardConfig";

export const useScrollCardAnimation = (
  cardAnimationType: CardAnimationType,
  config: Partial<ScrollGalleryConfig> = {}
) => {
  const { scrollCardConfig, startTriggerText, endTriggerText } =
    useScrollCardConfig(config);
  gsap.registerPlugin(ScrollTrigger);
  return useCallback(
    (grid: HTMLDivElement) => {
      const gridWrap = grid.childNodes;
      const gridItems = gridWrap[0].childNodes;
      if (!gridWrap || !gridItems) return;

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: grid,
          start: startTriggerText,
          end: endTriggerText,
          scrub: true,
        },
      });

      const { gridColumns, gridGap, gridWidth } = scrollCardConfig;
      grid.style.setProperty("--grid-width", gridWidth);
      grid.style.setProperty("--grid-item-ratio", "0.8");
      grid.style.setProperty("--grid-columns", `${gridColumns}`);
      grid.style.setProperty("--grid-gap", gridGap);
      switch (cardAnimationType) {
        case CARD_ANIMATION_TYPE.WAVE_LEFT:
          timeline.set(gridWrap, {
            transformOrigin: "0% 20%",
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
                  filter: "brightness(0%)",
                },
                {
                  duration: 1,
                  rotationX: ROTATION_X,
                  filter: "brightness(120%)",
                  stagger: 0.04,
                },
                0
              );
          }

          break;
        case CARD_ANIMATION_TYPE.WAVE_RIGHT:
        default:
          timeline.set(gridWrap, {
            transformOrigin: "0% 50%",
            rotationY: -30,
            xPercent: 65,
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
                  filter: "brightness(0%)",
                },
                {
                  duration: 1,
                  rotationX: 70,
                  filter: "brightness(120%)",

                  stagger: 0.04,
                },
                0
              );
          }
          break;
      }
    },
    [cardAnimationType, scrollCardConfig, startTriggerText, endTriggerText]
  );
};
