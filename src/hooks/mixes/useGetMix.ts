import { useParams } from "hooks/useParams";
import { MixesData } from "models/music/types";
import { useQuery } from "react-query";
import { getMixes } from "services/mixes/getMixes";

export const useGetMix = () => {
  const mixSlug = useParams("slug");
  const mixData = useQuery<MixesData>(["mixes"], () => getMixes());
  if (!mixData?.data || !mixSlug) return { mix: null, loading: true };
  const mix = mixData.data.mixes.find(({ slug }) => slug === mixSlug);
  return { mix, loading: true };
};
