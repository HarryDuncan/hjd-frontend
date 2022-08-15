import { useRouter } from "next/router";
import { useCallback } from "react";

export const useHandleRouting = (urlParam: string) => {
  const router = useRouter();
  return useCallback(
    (itemId: number | string) => {
      console.log(itemId);
      router.push(`${urlParam}${itemId}`);
    },
    [urlParam, router]
  );
};
