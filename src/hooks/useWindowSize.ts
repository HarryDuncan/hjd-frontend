import { useEffect, useState, useCallback } from "react";
import { useTheme } from "styled-components";
import { useWindowState } from "visual/compat/window-state/windowStateProvider";

export const WINDOW_SCREEN_TYPE = {
  WIDE_SCREEN: "WIDE_SCREEN",
  DESKTOP: "DESKTOP",
  LAPTOP: "LAPTOP",
  TABLET: "TABLET",
  MOBILE: "MOBILE",
};

type WindowScreen = keyof typeof WINDOW_SCREEN_TYPE;

export const useWindowScreenType = () => {
  const { breakpoints } = useTheme();
  const {
    state: {
      windowSize: { width },
    },
  } = useWindowState();

  return useCallback(() => {
    if (width >= breakpoints.wideScreen) {
      return WINDOW_SCREEN_TYPE.WIDE_SCREEN;
    }
    if (width >= breakpoints.desktop) {
      return WINDOW_SCREEN_TYPE.DESKTOP;
    }
    if (width >= breakpoints.laptop) {
      return WINDOW_SCREEN_TYPE.LAPTOP;
    }
    if (width > breakpoints.tablet) {
      return WINDOW_SCREEN_TYPE.TABLET;
    }
    return WINDOW_SCREEN_TYPE.MOBILE;
  }, [breakpoints, width]);
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
  }, [getScreenSize]);
  return windowSize;
};
