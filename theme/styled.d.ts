import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: (multiple?: number) => number;
    colors: {
      mono: {
        background: string;
        lightText: "#f0f0f0";
        darkText: "#030303";
      };

      brand: {
        brand01: "#0081a1";
        brand02: "#59cbe8";
      };
      gradients: {
        light: `linear-gradient(
                0deg,
                rgba(255, 255, 255, 1) 0%,
                rgba(205, 205, 205, 1) 10%,
                rgba(133, 133, 133, 1) 14%,
                rgba(219, 219, 219, 1) 50%,
                rgba(255, 255, 255, 1) 100%
              );`;
        dark: `linear-gradient(
                157deg,
                rgba(96, 96, 96, 1) 0%,
                rgba(74, 74, 74, 1) 0%,
                rgba(57, 57, 57, 1) 0%,
                rgba(27, 27, 27, 1) 100%
              );`;
      };
    };
    font: {
      weight: {
        light: 200;
        normal: 400;
        bold: 700;
      };
      default: {
        family: "Inter, Arial, Helvetica, sans-serif";
      };
      alternative: {
        family: '"Source Sans Pro", monospace';
      };
    };
    breakpoints: {
      wideScreen: 1501;
      desktop: 1280;
      tablet: 850;
      mobile: 800;
      smallMobile: 350;
    };
  }
}
