import { WINDOW_SCREEN_TYPE } from "hooks/useWindowSize";

export const SITE_PAGES = [
  { title: "Home", link: "/", isNavDark: true },
  { title: "About", link: "/bio" },
  // { title: "Mixes", link: "/music" },
  { title: "Art", link: "/art" },
  // { title: "Campaigns", link: "/campaigns" },
  { title: "Shop", link: "/shop" },
];

export const LARGE_NAV_WINDOW_SIZES = [
  WINDOW_SCREEN_TYPE.DESKTOP,
  WINDOW_SCREEN_TYPE.WIDE_SCREEN,
];

export const NAV_THEMES = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

export const NAV_OVERLAY_HEIGHT = "4em";
