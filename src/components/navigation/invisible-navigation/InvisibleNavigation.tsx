import React from "react";
import { InvisibleNavigationContainer } from "./InvisibleNavigation.styles";
import { NavTitle } from "../navigation.styles";

const InvisibleNavigation = () => {
  return (
    <InvisibleNavigationContainer>
      <NavTitle $isLight={false}>HARRY J DEE</NavTitle>
    </InvisibleNavigationContainer>
  );
};

export default InvisibleNavigation;
