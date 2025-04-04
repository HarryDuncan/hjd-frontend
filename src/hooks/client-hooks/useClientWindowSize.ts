import { useEffect, useState, useCallback } from "react";
import { useTheme } from "styled-components";
import { useWindowState } from "art-os-package";

export const WINDOW_TYPE = {
  WIDE_SCREEN: "WIDE_SCREEN",
  DESKTOP: "DESKTOP",
  LAPTOP: "LAPTOP",
  TABLET: "TABLET",
  MOBILE: "MOBILE",
  SMALL_MOBILE: "SMALL_MOBILE",
};

type ScreenType = keyof typeof WINDOW_TYPE;

export const useWindowScreenType = () => {
  const { breakpoints } = useTheme();
  const {
    state: {
      windowSize: { width },
    },
  } = useWindowState();

  return useCallback(() => {
    if (width > breakpoints.desktop) {
      return WINDOW_TYPE.WIDE_SCREEN;
    }
    if (width > breakpoints.laptop) {
      return WINDOW_TYPE.DESKTOP;
    }
    if (width > breakpoints.tablet) {
      return WINDOW_TYPE.LAPTOP;
    }
    if (width >= breakpoints.mobile) {
      return WINDOW_TYPE.TABLET;
    }
    if (width >= breakpoints.smallMobile) {
      return WINDOW_TYPE.MOBILE;
    }
    return WINDOW_TYPE.SMALL_MOBILE;
  }, [breakpoints, width]);
};

export const useClientWindowSize = () => {
  const [windowSize, updateWindowSize] = useState<ScreenType>("DESKTOP");
  const getScreenSize = useWindowScreenType();
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      const screenSize = getScreenSize();
      updateWindowSize(screenSize as ScreenType);
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
