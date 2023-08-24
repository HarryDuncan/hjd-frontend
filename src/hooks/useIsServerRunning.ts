import { useQuery } from "react-query";
import { getIsServerRunning } from "services/getIsServerRunning";
import { useHandleRouting } from "./useHandleRouting";
import { useEffect, useMemo } from "react";

export const useIsServerRunning = () => {
  const serverData = useQuery(["server"], () => getIsServerRunning());
  const reroute = useHandleRouting("/home");
  const isServerRunning = useMemo(
    () => !serverData?.data?.isError ?? true,
    [serverData]
  );

  useEffect(() => {
    if (!isServerRunning) {
      // reroute();
    }
  }, [isServerRunning, reroute]);

  return isServerRunning;
};
