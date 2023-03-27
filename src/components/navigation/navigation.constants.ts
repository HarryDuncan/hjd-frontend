import { WINDOW_SCREEN_TYPE } from "hooks/useWindowSize";
import { PageItem } from "./navigation.types";

export const SITE_PAGES: PageItem[] = [
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
