import { useQuery } from "react-query";
import { getIsServerRunning } from "services/getIsServerRunning";
import { useHandleRouting } from "./useHandleRouting";

export const useIsServerRunning = () => {
  const serverData = useQuery(["server"], () => getIsServerRunning());
  const reroute = useHandleRouting("");
  if (serverData.isError) {
    reroute("");
    return false;
  }
  return true;
};
