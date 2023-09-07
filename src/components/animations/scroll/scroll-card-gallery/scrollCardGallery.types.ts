import { ScrollTriggerConfig } from "../scroll.types";
import { CARD_ANIMATION_TYPE } from "./scrollCardGallery.consts";

export type CardAnimationType = keyof typeof CARD_ANIMATION_TYPE;
export type ScrollGalleryConfig = {
  gridGap: string;
  gridColumns: 3;
  gridWidth: string;
  startTrigger?: ScrollTriggerConfig;
  endTrigger?: ScrollTriggerConfig;
};
