import { useRouter } from "next/router";
import { useCallback } from "react";

export const useRouteHistory = () => {
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return goBack;
};
