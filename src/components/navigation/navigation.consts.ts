import { WINDOW_TYPE } from "hooks/client-hooks/useClientWindowSize";

export const SITE_PAGES = [
  { title: "Bio", link: "/bio" },
  { title: "Art", link: "/art" },
  { title: "Shop", link: "/shop" },
];

export const DASHBOARD_PAGES = [
  { title: "Bio", link: "/dashboard/bio" },
  { title: "Art", link: "/dashboard/art" },
  { title: "Shop", link: "/dashboard/shop" },
  { title: "orders", link: "/dashboard/orders" },
];
export const CHECKOUT_PAGE = { title: "Cart", link: "/checkout" };

export const LARGE_NAV_WINDOW_SIZES = [
  WINDOW_TYPE.DESKTOP,
  WINDOW_TYPE.LAPTOP,
  WINDOW_TYPE.WIDE_SCREEN,
];

export const NAV_THEMES = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};
export const NAV_SCROLL_BREAKPOINT_PX = 10;
export const NAV_OVERLAY_HEIGHT = "4em";
