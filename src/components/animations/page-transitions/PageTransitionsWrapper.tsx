import { useRouter } from "next/router";
import OverlayTransition from "./overlay-transition/OverlayTransition";
import { PageTransitionProps } from "./pageTransitions.types";

const NON_DEFAULT_TRANSITION_ROUTES = ["art/paintings", "shop/products"];
export const PageTransitionWrapper = ({ children }: PageTransitionProps) => {
  const router = useRouter();
  const currentRoute = router.asPath;

  if (
    NON_DEFAULT_TRANSITION_ROUTES.some(
      (route) => currentRoute.indexOf(route) !== -1
    )
  ) {
    return <div>{children}</div>;
  }
  switch (currentRoute) {
    default:
      return <OverlayTransition>{children}</OverlayTransition>;
  }
};
