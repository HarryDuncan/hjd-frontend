import { NETWORK_STATUS_TYPES } from "constants/api.constants";
import { useQuery } from "react-query";
import { getArt } from "services/art/getArt";
import { FetchArtResponse } from "../../models/art/types";

export const useArtData = () => {
  const artData = useQuery<FetchArtResponse>(["art-items"], () => getArt());
  return (
    artData?.data ?? {
      art: { paintings: [] },
      loading: true,
      isError: artData.status === NETWORK_STATUS_TYPES.ERROR,
    }
  );
};
