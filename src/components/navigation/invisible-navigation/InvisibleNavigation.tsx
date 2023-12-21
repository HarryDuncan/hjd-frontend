import React from "react";
import { InvisibleNavigationContainer } from "./InvisibleNavigation.styles";
import { NavBackgroundOverlay } from "../Navigation.styles";
import { HoverTitle } from "components/animations/gesture-animations/hover/HoverTitle";

const InvisibleNavigation = () => {
  return (
    <InvisibleNavigationContainer>
      <NavBackgroundOverlay $isOpen />
      <HoverTitle title="HARRY J DEE" />
    </InvisibleNavigationContainer>
  );
};

export default InvisibleNavigation;
