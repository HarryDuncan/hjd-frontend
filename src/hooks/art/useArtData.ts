import { useQuery } from "react-query";
import { getArt } from "services/art/getArt";
import { FetchArtResponse } from "../../models/art/types";

export const useArtData = () => {
  const artData = useQuery<FetchArtResponse>(["art-items"], () => getArt());
  return artData?.data ?? { art: { paintings: [] }, loading: true };
};
