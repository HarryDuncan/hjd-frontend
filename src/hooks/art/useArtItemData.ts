import { useParams } from "hooks/routing/useParams";
import { FetchArtResponse } from "models/art/types";
import { useQuery } from "react-query";
import { getArt } from "services/art/getArt";

export const useArtItemData = () => {
  const paintingSlug = useParams("slug");

  const artData = useQuery<FetchArtResponse>(["painting-items"], () =>
    getArt()
  );
  if (!artData?.data) return { painting: null, loading: true };

  const painting = artData?.data.art.find(({ slug }) => slug === paintingSlug);

  return { painting, loading: false };
};
