import { SCROLL_TRIGGER_SECTIONS } from "./scroll.consts";

export type ScrollTriggerSection = keyof typeof SCROLL_TRIGGER_SECTIONS;

export type ScrollTriggerConfig = {
  targetSection: ScrollTriggerSection;
  screenSection: ScrollTriggerSection;
  percentage: number;
};
