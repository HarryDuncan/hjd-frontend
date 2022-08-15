import { MixItem } from "models/music/types";
import { useQuery } from "react-query";
import { getMixes } from "services/mixes/getMixes";

type MixesData = {
  mixes: MixItem[];
};

export const useMixesData = () => {
  const mixesData = useQuery<MixesData>(["mixes"], () => getMixes());
  return mixesData.data ?? { mixes: [] };
};
