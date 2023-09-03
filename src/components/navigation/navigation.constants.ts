import { WINDOW_TYPE } from "hooks/client-hooks/useWindowSize";

export const SITE_PAGES = [
  { title: "Bio", link: "/bio" },
  { title: "Art", link: "/art" },
  { title: "Shop", link: "/shop" },
];

export const LARGE_NAV_WINDOW_SIZES = [
  WINDOW_TYPE.DESKTOP,
  WINDOW_TYPE.LAPTOP,
  WINDOW_TYPE.WIDE_SCREEN,
];

export const NAV_THEMES = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

export const NAV_OVERLAY_HEIGHT = "4em";
