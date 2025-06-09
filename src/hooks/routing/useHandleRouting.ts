import { useRouter } from "next/router";
import { useCallback } from "react";

export const useHandleRouting = (urlParam = "") => {
  const router = useRouter();
  return useCallback(
    (itemId: number | string = "") => {
      router.push(`${urlParam}${itemId}`);
    },
    [urlParam, router]
  );
};
