import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useEffect, useMemo } from "react";
import { useDashboardContext } from "./dashboard-context/dashboard.context";

export const useRedirectOnLoginLogout = () => {
  const {
    state: { isLoggedIn },
  } = useDashboardContext();
  const redirectRoute = useMemo(
    () => (isLoggedIn ? "/dashboard" : "/dashboard/login"),
    [isLoggedIn]
  );
  const handleRouting = useHandleRouting(redirectRoute);
  useEffect(() => {
    handleRouting();
  }, [handleRouting]);
};
