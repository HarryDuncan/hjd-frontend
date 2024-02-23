import { IconButton } from "components/buttons/icon-button/IconButton";
import { CheckoutNavigationContainer } from "../checkout.styles";
import { IconTypes } from "components/buttons/icon-button/IconButton.types";
import { useRouteHistory } from "hooks/routing/useRouteHistory";

export const CheckoutNavigation = () => {
  const routeHistory = useRouteHistory();

  return (
    <CheckoutNavigationContainer>
      <IconButton onClick={routeHistory} type={IconTypes.EXIT} hasGesture />
    </CheckoutNavigationContainer>
  );
};
