import { SCROLL_TRIGGER_SECTIONS } from "../scroll.consts";

export const TEXT_TYPE = {
  HEADER: "HEADER",
  TEXT: "TEXT",
};

export const CHAR_ANIMATIONS = {
  FLASH_IN: "FLASH_IN",
  FADE_IN_LEFT: "FADE_IN_LEFT",
  MULTI_FLASH: "MULTI_FLASH",
  FADE_UP: "FADE_UP",
  NONE: "NONE",
};

export const DEFAULT_CONFIG = {
  animationType: CHAR_ANIMATIONS.MULTI_FLASH,
  startTrigger: {
    targetSection: SCROLL_TRIGGER_SECTIONS.CENTER,
    screenSection: SCROLL_TRIGGER_SECTIONS.BOTTOM,
    percentage: 10,
  },
  endTrigger: {
    targetSection: SCROLL_TRIGGER_SECTIONS.CENTER,
    screenSection: SCROLL_TRIGGER_SECTIONS.CENTER,
    percentage: 10,
  },
};
