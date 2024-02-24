import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useCallback } from "react";

export const useGoToLanding = () => {
  const handleRouting = useHandleRouting("/");
  return useCallback(() => {
    handleRouting();
  }, [handleRouting]);
};
