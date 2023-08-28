// Offset for gallery items so they are under the parallax image
export const MAIN_GALLERY_TOP_OFFSET = 150;
export const SCROLL_LEFT = "/assets/icons/Left.svg";
export const SCROLL_RIGHT = "/assets/icons/Right.svg";
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
    top: "55%",
    left: "3%",
  },
  mobile: {
    positionType: "fixed",
    top: "90vh",
    left: "0%",
  },
};

export const SCROLL_RIGHT_POSITIONS = {
  position: {
    positionType: "absolute",
    top: "55%",
    right: "3%",
  },
  mobile: {
    positionType: "fixed",
    top: "90vh",
    right: "0%",
  },
};
export const EXIT_POSITIONS = {
  position: {
    positionType: "absolute",
    top: "6rem",
    right: "3%",
  },
  mobile: {
    positionType: "absolute",
    top: "4rem",
    right: "3%",
  },
};
