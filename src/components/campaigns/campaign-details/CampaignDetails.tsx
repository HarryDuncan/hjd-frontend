import AnimationWidget from "components/animation-widget/AnimationWidget";
import { AnimationWidgetScene } from "components/animation-widget/types";
import { OverlayDiv } from "components/styled-components/Containers";
import { ContentText, MainTitle } from "components/styled-components/Text";
import { AIDS_DAY_SCENE, PAY_THE_RENT_SCENE } from "constants/campaigns";
import { useGetCampaign } from "hooks/campaigns/useGetCampaign";
import useDeviceSize from "hooks/useDeviceSize";
import { Campaign } from "models/campaigns/types";
import {
  CampaignContentContainer,
  DescriptionContainer,
  InnerDescriptionContainer,
} from "./CampaignDetails.styles";

const CampaignDetails = () => {
  const { campaign, campaignConsts } = useCampaignData();
  if (!campaign) return null;
  const { height, width } = useContentHeightAndWidth();
  return (
    <CampaignContentContainer>
      <AnimationWidget
        scenes={campaignConsts?.sceneData ?? ([] as AnimationWidgetScene[])}
        viewWidth={"100%"}
      />
      <DescriptionContainer $height={height} $width={width}>
        <OverlayDiv />
        <InnerDescriptionContainer>
          <MainTitle $isLight={true}>{campaign.title}</MainTitle>
          <ContentText $isLight={true}>{campaign.description}</ContentText>
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
  if (!campaign) return null;
  switch (campaign.componentId) {
    case "AidsDay":
      return { sceneData: AIDS_DAY_SCENE };
    case "PayTheRent":
      return { sceneData: PAY_THE_RENT_SCENE };
    default:
      console.warn(`constants haven't been set up for ${campaign.componentId}`);
      return null;
  }
};
export default CampaignDetails;
