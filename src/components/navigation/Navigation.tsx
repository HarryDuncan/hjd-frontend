import { useWindowSize } from "hooks/useWindowSize";
import React, { useCallback } from "react";
import { DesktopNav } from "./desktop/DesktopNavigation";
import { MobileNavigation } from "./mobile/MobileNavigation";
import { LARGE_NAV_WINDOW_SIZES, NAV_THEMES } from "./navigation.constants";
import { NavBackgroundOverlay, NavigationContainer } from "./navigation.styles";
import { useIsNavDark } from "./hooks/useIsNavDark";
import { useIsNavTop } from "./hooks/useIsNavTop";
import { NavTheme } from "./navigation.types";
import { useHandleRouting } from "hooks/useHandleRouting";
import { HoverTitle } from "components/animations/gesture-animations/hover/HoverTitle";

const Navigation = () => {
  const windowSize = useWindowSize();
  const navTheme = useNavTheme();
  const goToLanding = useGoToLanding();
  return (
    <NavigationContainer $isLight={navTheme === NAV_THEMES.DARK}>
      <NavBackgroundOverlay $isOpen={navTheme === NAV_THEMES.DARK} />
      <HoverTitle title={"HARRY J DEE"} onClick={goToLanding} />

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

const useGoToLanding = () => {
  const handleRouting = useHandleRouting("/");
  return useCallback(() => {
    handleRouting();
  }, [handleRouting]);
};

export default Navigation;
