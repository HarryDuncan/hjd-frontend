import { IconButton } from "components/buttons/icon-button/IconButton";
import { IconTypes } from "components/buttons/icon-button/IconButton.types";
import { useRouteHistory } from "hooks/routing/useRouteHistory";
import { useGoToLanding } from "hooks/routing/useGoToLanding";
import { FloatingNavigationContainer } from "../Navigation.styles";

interface FloatingContentNavigationProps {
  navigationRoutes: string[];
}
export const FloatingContentNavigation = ({
  navigationRoutes,
}: FloatingContentNavigationProps) => {
  const routeHistory = useRouteHistory();
  const goToLanding = useGoToLanding();
  return (
    <FloatingNavigationContainer>
      {navigationRoutes.includes("back") && (
        <IconButton onClick={routeHistory} type={IconTypes.BACK} hasGesture />
      )}
      {navigationRoutes.includes("home") && (
        <IconButton onClick={goToLanding} type={IconTypes.EXIT} hasGesture />
      )}
    </FloatingNavigationContainer>
  );
};
