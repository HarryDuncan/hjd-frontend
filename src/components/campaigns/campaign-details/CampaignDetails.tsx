import { OverlayDiv } from "components/containers/Containers";
import { ContentText, MainTitle } from "components/text/Text";
import { useGetCampaign } from "hooks/campaigns/useGetCampaign";
import { Campaign } from "models/campaigns/types";

import {
  CampaignContentContainer,
  DescriptionContainer,
  InnerDescriptionContainer,
} from "./CampaignDetails.styles";

const CampaignDetails = () => {
  const {
    campaign,
    campaignConsts: { sceneData },
  } = useCampaignData();
  const { height, width } = useContentHeightAndWidth();
  if (!campaign) return null;

  return (
    <CampaignContentContainer>
      {sceneData && <div />}

      <DescriptionContainer $height={height} $width={width}>
        <OverlayDiv />
        <InnerDescriptionContainer>
          <MainTitle $isLight>{campaign.title}</MainTitle>
          <ContentText $isLight>{campaign.description}</ContentText>
        </InnerDescriptionContainer>
      </DescriptionContainer>
    </CampaignContentContainer>
  );
};

const useContentHeightAndWidth = () => {
  const height = 100;
  const width = 100;
  return { height, width };
};

const useCampaignData = () => {
  const { campaign } = useGetCampaign();
  const campaignConsts = useGetCampaignConsts(campaign);
  return { campaign, campaignConsts };
};

const useGetCampaignConsts = (campaign: Campaign | null | undefined) => {
  if (!campaign) return { sceneData: null };
  switch (campaign.componentId) {
    case "AidsDay":
      return { sceneData: null };
    case "PayTheRent":
      return { sceneData: null };
    default:
      console.warn(`constants haven't been set up for ${campaign.componentId}`);
      return { sceneData: null };
  }
};
export default CampaignDetails;
