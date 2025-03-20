import { NETWORK_STATUS_TYPES } from "constants/api.constants";
import { useQuery } from "react-query";
import { FetchArtResponse } from "../../models/art/types";
import { getArt } from "services/art/getArt";

export const useArtData = () => {
  const artData = useQuery<FetchArtResponse>(["painting-items"], () =>
    getArt()
  );
  console.log(artData);
  return (
    artData?.data ?? {
      art: { art: [] },
      loading: true,
      isError: artData.status === NETWORK_STATUS_TYPES.ERROR,
    }
  );
};
