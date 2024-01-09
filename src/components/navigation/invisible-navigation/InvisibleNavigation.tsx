import React from "react";
import { InvisibleNavigationContainer } from "./InvisibleNavigation.styles";
import { NavBackgroundOverlay } from "../Navigation.styles";
import { HoverTitle } from "components/animations/gesture-animations/hover/HoverTitle";
import { useGoToLanding } from "../hooks/useGoToLanding";

const InvisibleNavigation = () => {
  const goToLanding = useGoToLanding();
  return (
    <InvisibleNavigationContainer>
      <NavBackgroundOverlay $isOpen />
      <HoverTitle title="HARRY J DEE" onClick={goToLanding} />
    </InvisibleNavigationContainer>
  );
};

export default InvisibleNavigation;
