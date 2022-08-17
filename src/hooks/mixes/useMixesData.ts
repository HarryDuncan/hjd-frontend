import { MixesData } from "models/music/types";
import { useQuery } from "react-query";
import { getMixes } from "services/mixes/getMixes";

export const useMixesData = () => {
  const mixesData = useQuery<MixesData>(["mixes"], () => getMixes());
  return mixesData.data ?? { mixes: [] };
};
