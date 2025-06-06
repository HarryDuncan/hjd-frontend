import { DefaultTheme } from "styled-components";

export type Theme = typeof THEME;

export const SPACING_UNIT = 8;

export const THEME: DefaultTheme = {
  spacing: (multiple = 1) => SPACING_UNIT * multiple,
  colors: {
    mono: {
      background: "#fafafa",
      lightText: "#fffcfc",
      darkText: "#030303",
      lightGray: "#949292",
    },

    brand: {
      brand01: "#0081a1",
      brand02: "#59cbe8",
    },
    gradients: {
      light: `linear-gradient(
                0deg,
                rgba(255, 255, 255, 1) 0%,
                rgba(205, 205, 205, 1) 10%,
                rgba(133, 133, 133, 1) 14%,
                rgba(219, 219, 219, 1) 50%,
                rgba(255, 255, 255, 1) 100%
              );`,
      dark: `linear-gradient(180deg, rgba(15,15,15,1) 0%, rgba(33,33,33,1) 100%);`,
    },
  },
  font: {
    size: {
      xxsm: "1rem",
      xSmall: "1.5rem",
      small: "2rem",
      mediumSmall: "3rem",
      medium: "4rem",
      mediumLarge: "4.5rem",
      large: "6rem",
      xLarge: "8rem",
    },
    weight: {
      none: 0,
      light: 200,
      normal: 400,
      bold: 700,
    },
    default: {
      family: "var(--font-default)",
    },
    alternative: {
      family: "var(--font-hjd)",
    },
  },
  breakpoints: {
    wideScreen: 1500,
    desktop: 1280,
    laptop: 1080,
    tablet: 850,
    mobile: 600,
    smallMobile: 350,
  },
};
