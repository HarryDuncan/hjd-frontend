import { OverlayDiv } from "components/styled-components/Containers";
import { ContentText, MainTitle } from "components/styled-components/Text";
import { DynamicInteractiveScene } from "components/visual-components/DynamicInteractiveScene";
import { useGetCampaign } from "hooks/campaigns/useGetCampaign";

import { Campaign } from "models/campaigns/types";
import { InteractiveSceneParams } from "visual/visual-components/interactive-scene/interactiveScene.types";

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
  if (!campaign) return null;
  const { height, width } = useContentHeightAndWidth();
  return (
    <CampaignContentContainer>
      {sceneData && (
        <DynamicInteractiveScene {...(sceneData as InteractiveSceneParams)} />
      )}

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
