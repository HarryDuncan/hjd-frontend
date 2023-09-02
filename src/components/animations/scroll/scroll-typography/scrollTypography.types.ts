import { CHAR_ANIMATIONS, SECTIONS } from "./scrollTypography.consts";

export type ScrollAnimationType = keyof typeof CHAR_ANIMATIONS;

export type Section = keyof typeof SECTIONS;
export type ScrollTrigger = {
  targetSection: Section;
  screenSection: Section;
  percentage: number;
};
export type ScrollTypographyConfig = {
  animationType: ScrollAnimationType;
  startTrigger?: ScrollTrigger;
  endTrigger?: ScrollTrigger;
};
