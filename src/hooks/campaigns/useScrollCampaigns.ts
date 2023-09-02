import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useParams } from "hooks/routing/useParams";
import { useCallback } from "react";
import {
  Direction,
  moveThroughArray,
} from "../../../utils/helpers/moveThroughArray";
import { useCampaignData } from "./useCampaignData";

export const useScrollCampaigns = () => {
  const { campaigns } = useCampaignData();

  const handleRouting = useHandleRouting("");
  const currentSlug = useParams("slug");

  const currentIndex = campaigns.findIndex(({ slug }) => slug === currentSlug);
  return useCallback(
    (step: Direction) => {
      const { newIndex } = moveThroughArray(campaigns, currentIndex, step);
      handleRouting(campaigns[newIndex].slug);
    },
    [campaigns, currentIndex, handleRouting]
  );
};
