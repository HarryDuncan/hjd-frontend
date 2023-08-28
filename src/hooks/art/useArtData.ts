import { NETWORK_STATUS_TYPES } from "constants/api.constants";
import { useQuery } from "react-query";
import { getPaintings } from "services/art/getPaintings";
import { FetchPaintingsResponse } from "../../models/art/types";

export const useArtData = () => {
  const artData = useQuery<FetchPaintingsResponse>(["painting-items"], () =>
    getPaintings()
  );
  return (
    artData?.data ?? {
      paintings: { paintings: [] },
      loading: true,
      isError: artData.status === NETWORK_STATUS_TYPES.ERROR,
    }
  );
};
