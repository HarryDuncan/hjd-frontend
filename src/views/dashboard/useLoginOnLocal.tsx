import { useDashboardContext } from "./dashboard-context/dashboard.context";

export const useLoginOnLocal = () => {
  const { dispatch } = useDashboardContext();
  if (window.location.host === "localhost:3000") {
    dispatch({ type: "LOGIN" });
  }
};
