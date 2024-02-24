import { useClientWindowSize } from "hooks/client-hooks/useClientWindowSize";
import React from "react";
import { DesktopNav } from "./desktop/DesktopNavigation";
import { MobileNavigation } from "./mobile/MobileNavigation";
import { LARGE_NAV_WINDOW_SIZES, NAV_THEMES } from "./navigation.consts";
import { NavBackgroundOverlay, NavigationContainer } from "./Navigation.styles";
import { useIsNavTop } from "./hooks/useIsNavTop";
import { NavTheme } from "./navigation.types";
import { HoverTitle } from "components/animations/gesture-animations/hover/HoverTitle";
import { useGoToLanding } from "../../hooks/routing/useGoToLanding";

const Navigation = () => {
  const windowSize = useClientWindowSize();
  const navTheme = useNavTheme();
  const goToLanding = useGoToLanding();
  return (
    <NavigationContainer $isLight={navTheme === NAV_THEMES.DARK}>
      <NavBackgroundOverlay $isOpen={navTheme === NAV_THEMES.DARK} />
      <HoverTitle title="HARRY J DEE" onClick={goToLanding} />

      {LARGE_NAV_WINDOW_SIZES.includes(windowSize) ? (
        <DesktopNav navTheme={navTheme} />
      ) : (
        <MobileNavigation navTheme={navTheme} />
      )}
    </NavigationContainer>
  );
};

const useNavTheme = () => {
  const isNavTop = useIsNavTop();
  const navTheme = !isNavTop ? NAV_THEMES.DARK : NAV_THEMES.LIGHT;
  return navTheme as NavTheme;
};

export default Navigation;
