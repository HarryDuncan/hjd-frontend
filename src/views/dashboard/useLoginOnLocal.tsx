import { useEffect } from "react";
import { useDashboardContext } from "./dashboard-context/dashboard.context";

export const useLoginOnLocal = () => {
  const { dispatch } = useDashboardContext();
  useEffect(() => {
    if (window.location.host.indexOf("localhost:3000") !== -1) {
      dispatch({ type: "LOGIN" });
    }
  }, [dispatch]);
};
