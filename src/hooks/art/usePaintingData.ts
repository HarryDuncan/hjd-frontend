import { useParams } from "hooks/useParams";
import { FetchPaintingsResponse } from "models/art/types";

import { useQuery } from "react-query";
import { getPaintings } from "services/art/getPaintings";

export const usePaintingData = () => {
  const paintingSlug = useParams("slug");

  const artData = useQuery<FetchPaintingsResponse>(["painting-items"], () =>
    getPaintings()
  );
  if (!artData?.data) return { painting: null, loading: true };

  const painting = artData?.data.paintings.paintings.find(
    ({ slug }) => slug === paintingSlug
  );

  return { painting, loading: false };
};
