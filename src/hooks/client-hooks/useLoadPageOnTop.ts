import { useEffect } from "react";

export const useLoadPageOnTop = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
};
