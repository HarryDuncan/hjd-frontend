import React from "react";
import { InvisibleNavigationContainer } from "./InvisibleNavigation.styles";
import { NavBackgroundOverlay } from "../Navigation.styles";

import { useGoToLanding } from "../../../hooks/routing/useGoToLanding";
import { NavTitleAnimation } from "../desktop/NavTitleAnimation";

const InvisibleNavigation = () => {
  const goToLanding = useGoToLanding();
  return (
    <InvisibleNavigationContainer>
      <NavBackgroundOverlay $isOpen />
      <NavTitleAnimation onClick={goToLanding} isLight />
    </InvisibleNavigationContainer>
  );
};

export default InvisibleNavigation;
