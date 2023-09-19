// Offset for gallery items so they are under the parallax image
export const MAIN_GALLERY_TOP_OFFSET = 150;
export const SCROLL_LEFT = "/assets/icons/left.svg";
export const SCROLL_RIGHT = "/assets/icons/right.svg";
export const EXIT = "/assets/icons/close.svg";
export const BANNER_IMAGE_HOVER_CONFIG = {
  default: {
    heightPx: MAIN_GALLERY_TOP_OFFSET,
    positionPercentage: { x: 50, y: 50 },
  },
  final: {
    heightPx: MAIN_GALLERY_TOP_OFFSET,
    positionPercentage: { x: 20, y: 20 },
  },
};

export const BANNER_IMAGE_HOVER_CONFIG_MOBILE = {
  default: {
    heightPx: 100,
    positionPercentage: { x: 50, y: 50 },
  },
  final: {
    heightPx: 100,
    positionPercentage: { x: 20, y: 20 },
  },
};

export const SCROLL_LEFT_POSITIONS = {
  position: {
    positionType: "absolute",
    top: "205%",
    left: "3%",
  },
  tablet: {
    positionType: "absolute",
    top: "205%",
    right: "3%",
  },
  mobile: {
    positionType: "absolute",
    top: "22%",
    left: "0%",
  },
};

export const SCROLL_RIGHT_POSITIONS = {
  position: {
    positionType: "absolute",
    top: "205%",
    right: "3%",
  },
  tablet: {
    positionType: "absolute",
    top: "205%",
    right: "3%",
  },
  mobile: {
    positionType: "absolute",
    top: "22%",
    right: "0%",
  },
};
export const EXIT_POSITIONS = {
  position: {
    positionType: "absolute",
    top: "2rem",
    right: "3%",
  },
  tablet: {
    positionType: "absolute",
    top: "205%",
    right: "3%",
  },
  mobile: {
    positionType: "absolute",
    top: "2%",
    right: "0%",
  },
};

export const IDLE_TIMER = 20000;
export const LOAD_MORE_OFFSET = 200;
