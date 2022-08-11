import { useEffect, Dispatch, useState, useCallback } from "react";
import { useTheme } from "styled-components";

export const WINDOW_SCREEN_TYPE = {
  WIDE_SCREEN: "wideScreen",
  DESKTOP: "desktop",
  TABLET: "tablet",
  MOBILE: "mobile",
};

type WindowScreen = keyof typeof WINDOW_SCREEN_TYPE;

export const useWindowScreenType = () => {
  const { breakpoints } = useTheme();
  return useCallback(() => {
    if (document.documentElement.clientWidth >= breakpoints.wideScreen) {
      return WINDOW_SCREEN_TYPE.WIDE_SCREEN;
    } else if (document.documentElement.clientWidth > breakpoints.desktop) {
      return WINDOW_SCREEN_TYPE.DESKTOP;
    } else if (document.documentElement.clientWidth > breakpoints.tablet) {
      return WINDOW_SCREEN_TYPE.TABLET;
    } else {
      return WINDOW_SCREEN_TYPE.MOBILE;
    }
  }, [breakpoints]);
};

export const useWindowSize = () => {
  const [windowSize, updateWindowSize] = useState<WindowScreen>("DESKTOP");
  const getScreenSize = useWindowScreenType();
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      const screenSize = getScreenSize();
      updateWindowSize(screenSize as WindowScreen);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
