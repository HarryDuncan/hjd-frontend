import { NAV_THEMES } from "./navigation.consts";

export type PageItem = {
  title: string;
  link: string;
  isNavDark?: boolean;
};

export type NavTheme = keyof typeof NAV_THEMES;
