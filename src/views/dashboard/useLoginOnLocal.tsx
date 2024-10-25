import { useEffect } from "react";
import { useDashboardContext } from "./dashboard-context/dashboard.context";

export const useLoginOnLocal = () => {
  const {
    dispatch,
    state: { isLoggedIn },
  } = useDashboardContext();
  useEffect(() => {
    if (window.location.host.indexOf("localhost:3s000") !== -1 && !isLoggedIn) {
      dispatch({ type: "LOGIN" });
    }
  }, [dispatch, isLoggedIn]);
};
