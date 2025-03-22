import { useParams } from "hooks/routing/useParams";
import { FetchArtResponse } from "models/art/types";
import { useQuery } from "react-query";
import { getArt } from "services/art/getArt";

export const useArtItemData = () => {
  const artSlug = useParams("slug");

  const artData = useQuery<FetchArtResponse>(["painting-items"], () =>
    getArt()
  );
  if (!artData?.data) return { art: null, loading: true };

  const art = artData?.data.art.find(({ slug }) => slug === artSlug);

  return { art, loading: false };
};
