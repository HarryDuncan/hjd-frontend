import { ScrollTriggerConfig } from "../scroll.types";
import { CHAR_ANIMATIONS } from "./scrollTypography.consts";

export type ScrollAnimationType = keyof typeof CHAR_ANIMATIONS;

export type ScrollTypographyConfig = {
  animationType: ScrollAnimationType;
  startTrigger?: ScrollTriggerConfig;
  endTrigger?: ScrollTriggerConfig;
};
