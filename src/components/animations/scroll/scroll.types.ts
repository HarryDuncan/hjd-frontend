import { SECTIONS } from "./scroll.consts";

export type ScrollTriggerSection = keyof typeof SECTIONS;

export type ScrollTriggerConfig = {
  targetSection: ScrollTriggerSection;
  screenSection: ScrollTriggerSection;
  percentage: number;
};
