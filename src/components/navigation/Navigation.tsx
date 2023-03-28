import { useWindowSize } from "hooks/useWindowSize";
import React from "react";
import { DesktopNav } from "./desktop/DesktopNavigation";
import { MobileNavigation } from "./mobile/MobileNavigation";
import { LARGE_NAV_WINDOW_SIZES, NAV_THEMES } from "./navigation.constants";
import {
  NavBackgroundOverlay,
  NavigationContainer,
  NavTitle,
} from "./styledComponents";
import { useIsNavDark } from "./hooks/useIsNavDark";
import { useIsNavTop } from "./hooks/useIsNavTop";
import { NavTheme } from "./navigation.types";
import { useIsServerRunning } from "hooks/useIsServerRunning";

const Navigation = () => {
  const windowSize = useWindowSize();
  const navTheme = useNavTheme();
  useIsServerRunning();

  return (
    <NavigationContainer>
      <NavBackgroundOverlay $isOpen={navTheme === NAV_THEMES.DARK} />
      <NavTitle $isLight={navTheme === NAV_THEMES.DARK}>HARRY J DEE</NavTitle>
      {LARGE_NAV_WINDOW_SIZES.includes(windowSize) ? (
        <DesktopNav navTheme={navTheme} />
      ) : (
        <MobileNavigation navTheme={navTheme} />
      )}
    </NavigationContainer>
  );
};

const useNavTheme = () => {
  const isNavDark = useIsNavDark();
  const isNavTop = useIsNavTop();
  const navTheme =
    isNavDark || (!isNavDark && !isNavTop) ? NAV_THEMES.DARK : NAV_THEMES.LIGHT;
  return navTheme as NavTheme;
};

export default Navigation;
