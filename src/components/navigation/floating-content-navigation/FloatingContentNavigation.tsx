import { IconButton } from "components/buttons/icon-button/IconButton";
import { IconTypes } from "components/buttons/icon-button/IconButton.types";
import { useRouteHistory } from "hooks/routing/useRouteHistory";
import { useGoToLanding } from "hooks/routing/useGoToLanding";
import { FloatingNavigationContainer } from "../Navigation.styles";

interface FloatingContentNavigation {
  navigationRoutes: string[];
}
export const FloatingContentNavigation = ({
  navigationRoutes,
}: FloatingContentNavigation) => {
  const routeHistory = useRouteHistory();
  const goToLanding = useGoToLanding();
  return (
    <FloatingNavigationContainer>
      {navigationRoutes.includes("back") && (
        <IconButton onClick={routeHistory} type={IconTypes.EXIT} hasGesture />
      )}
      {navigationRoutes.includes("home") && (
        <IconButton onClick={goToLanding} type={IconTypes.EXIT} hasGesture />
      )}
    </FloatingNavigationContainer>
  );
};
