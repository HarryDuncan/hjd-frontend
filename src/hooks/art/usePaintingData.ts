import { FetchArtResponse } from "models/art/types";
import { useQuery } from "react-query";
import { getArt } from "services/art/getArt";

export const usePaintingData = (paintingId: number) => {
  const artData = useQuery<FetchArtResponse>(["art-items"], () => getArt());
  if (!artData?.data) return { painting: null, loading: true };

  const painting = artData?.data.art.paintings.find(
    ({ id }) => id === paintingId
  );

  return { painting, loading: false };
};
