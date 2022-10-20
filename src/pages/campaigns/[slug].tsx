import Layout from "components/layout/DefaultLayout";
import {
  Exit,
  ScrollLeft,
  ScrollRight,
} from "components/styled-components/Images";
import { MainTitle } from "components/styled-components/Text";
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
    <Layout>
      <Exit src={EXIT} onClick={handleExit} />
      <ScrollLeft
        src={SCROLL_LEFT}
        onClick={() => changeCampaign(Direction.REVERSE)}
      />
      <ScrollRight
        src={SCROLL_RIGHT}
        onClick={() => changeCampaign(Direction.FORWARD)}
      />
      <MainTitle $isDark={true}>{campaign.title}</MainTitle>
    </Layout>
  );
};

const useHandleExit = () => {
  const router = useRouter();
  return useCallback(() => {
    router.push("/campaigns");
  }, [router]);
};

export default Slug;
