import { CampaignContent } from "components/campaigns/content";
import ViewCampaign from "components/layout/CampaignLayout";
import {
  Exit,
  ScrollLeft,
  ScrollRight,
} from "components/styled-components/Images";
import { EXIT, SCROLL_LEFT, SCROLL_RIGHT } from "constants/ui.constants";
import { useGetCampaign } from "hooks/campaigns/useGetCampaign";
import { useScrollCampaigns } from "hooks/campaigns/useScrollCampaigns";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Direction } from "../../../utils/helpers/moveThroughArray";

const Slug = () => {
  const { campaign } = useGetCampaign();
  const handleExit = useHandleExit();
  const changeCampaign = useScrollCampaigns();
  if (!campaign) return null;
  return (
    <ViewCampaign>
      <Exit src={EXIT} onClick={handleExit} />
      <ScrollLeft
        src={SCROLL_LEFT}
        onClick={() => changeCampaign(Direction.REVERSE)}
      />
      <ScrollRight
        src={SCROLL_RIGHT}
        onClick={() => changeCampaign(Direction.FORWARD)}
      />
      <CampaignContent />
    </ViewCampaign>
  );
};

const useHandleExit = () => {
  const router = useRouter();
  return useCallback(() => {
    router.push("/campaigns");
  }, [router]);
};

export default Slug;
