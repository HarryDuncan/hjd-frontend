import { IconButton } from "components/buttons/icon-button/IconButton";
import { CheckoutNavigationContainer } from "../checkout.styles";
import { IconTypes } from "components/buttons/icon-button/IconButton.types";
import { useRouteHistory } from "hooks/routing/useRouteHistory";
import { useGoToLanding } from "hooks/routing/useGoToLanding";

interface CheckoutNavigationProps {
  navigationRoutes: string[];
}
export const CheckoutNavigation = ({
  navigationRoutes,
}: CheckoutNavigationProps) => {
  const routeHistory = useRouteHistory();
  const goToLanding = useGoToLanding();
  return (
    <CheckoutNavigationContainer>
      {navigationRoutes.includes("back") && (
        <IconButton onClick={routeHistory} type={IconTypes.EXIT} hasGesture />
      )}
      {navigationRoutes.includes("home") && (
        <IconButton onClick={goToLanding} type={IconTypes.EXIT} hasGesture />
      )}
    </CheckoutNavigationContainer>
  );
};
