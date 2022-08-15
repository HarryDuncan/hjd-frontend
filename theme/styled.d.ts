import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: (multiple?: number) => number;
    colors: {
      mono: {
        background: string;
      };

      brand: {
        brand01: "#0081a1";
        brand02: "#59cbe8";
      };
      gradients: {
        lightSurface: `linear-gradient(0deg, rgba(255, 255, 255) 0%, rgba(222, 222, 222) 100%))`;
        darkSurface: `linear-gradient(
                      157deg,
                      rgba(76, 76, 76, 1) 0%,
                      rgba(74, 74, 74, 1) 0%,
                      rgba(36, 36, 36, 1) 0%,
                      rgba(27, 27, 27, 1) 100%
                    );`;
        lightText: `linear-gradient(
                0deg,
                rgba(255, 255, 255, 1) 0%,
                rgba(205, 205, 205, 1) 10%,
                rgba(133, 133, 133, 1) 14%,
                rgba(219, 219, 219, 1) 50%,
                rgba(255, 255, 255, 1) 100%
              );`;
        darkText: `linear-gradient(
                157deg,
                rgba(96, 96, 96, 1) 0%,
                rgba(74, 74, 74, 1) 0%,
                rgba(57, 57, 57, 1) 0%,
                rgba(27, 27, 27, 1) 100%
              );`;
      };
    };
    font: {
      default: {
        family: "Inter, Arial, Helvetica, sans-serif";
        weight: {
          light: 200;
          normal: 400;
          bold: 700;
        };
      };
      alternative: {
        family: '"Source Sans Pro", monospace';
      };
    };
    breakpoints: {
      wideScreen: 1501;
      desktop: 1280;
      tablet: 800;
      mobile: 800;
      smallMobile: 350;
    };
  }
}
