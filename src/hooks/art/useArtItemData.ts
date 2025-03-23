import { ART_ROOT_URL } from "constants/art.constants";
import { useParams } from "hooks/routing/useParams";
import { FetchArtResponse } from "models/art/types";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { getArt } from "services/art/getArt";

export const useArtItemData = () => {
  const artSlug = useParams("slug");

  const artData = useQuery<FetchArtResponse>(["painting-items"], () =>
    getArt()
  );
  const art = artData?.data?.art.find(({ slug }) => slug === artSlug);
  const formattedArt = useMemo(() => {
    return {
      ...art,
      imageUrls: art?.imageUrls.map((imageUrl) => `${ART_ROOT_URL}${imageUrl}`),
    };
  }, [art]);
  if (!art) return { art: null, loading: true };

  return { art: formattedArt, loading: false };
};
