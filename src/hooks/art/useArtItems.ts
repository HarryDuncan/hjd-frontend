import { useQuery } from "react-query";
import { getArt } from "services/art/getArt";
import { Painting } from "../../models/gallery/types";

type FetchArtResponse = {
  art: {
    paintings: Painting[];
  };
  loading: boolean;
};
export const useArtItems = () => {
  const artData = useQuery<FetchArtResponse>(["art-items"], () => getArt());
  console.log(artData);
  return artData?.data ?? { art: { paintings: [] }, loading: true };
};
