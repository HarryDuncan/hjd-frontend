import { ScrollTriggerConfig } from "../scroll.types";
import { CARD_ANIMATION_TYPE } from "./scrollCardGallery.consts";

export type CardAnimationType = keyof typeof CARD_ANIMATION_TYPE;
export type ScrollGalleryConfig = {
  cardAnimationType: CardAnimationType;
  gridGap: string;
  gridColumns: number;
  gridWidth: string;
  startTrigger?: ScrollTriggerConfig;
  endTrigger?: ScrollTriggerConfig;
  gridWrapTransform?: Partial<TransformStyleObject>;
};

export type TransformStyleObject = {
  transformOrigin: string;
  rotationY: number;
  xPercent: number;
  yPercent: number;
};
