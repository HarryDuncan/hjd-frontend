import { SCROLL_TRIGGER_SECTIONS } from "../scroll.consts";

export const CARD_ANIMATION_TYPE = {
  WAVE_LEFT: "WAVE_LEFT",
  WAVE_RIGHT: "WAVE_RIGHT",
  NONE: "NONE",
};

export const ROTATION_X = 50;
export const DEFAULT_CONFIG = {
  gridGap: "8rem",
  gridColumns: 3,
  gridWidth: "50%",
  startTrigger: {
    targetSection: SCROLL_TRIGGER_SECTIONS.TOP,
    screenSection: SCROLL_TRIGGER_SECTIONS.BOTTOM,
    percentage: 5,
  },
  endTrigger: {
    targetSection: SCROLL_TRIGGER_SECTIONS.BOTTOM,
    screenSection: SCROLL_TRIGGER_SECTIONS.TOP,
    percentage: 5,
  },
  gridWrapTransform: {
    transformOrigin: "0% 20%",
    rotationY: 30,
    xPercent: -45,
  },
};
