import { OverlayDiv } from "components/styled-components/Containers";
import { ContentText, MainTitle } from "components/styled-components/Text";
import { useGetCampaign } from "hooks/campaigns/useGetCampaign";
import {
  CampaignContentContainer,
  DescriptionContainer,
  InnerDescriptionContainer,
} from "./CampaignContent.styles";

const AidsDay = () => {
  const { campaign } = useGetCampaign();
  if (!campaign) return null;

  const { height, width } = useContentHeightAndWidth();
  return (
    <CampaignContentContainer>
      <DescriptionContainer $height={height} $width={width}>
        <OverlayDiv />
        <InnerDescriptionContainer>
          <MainTitle $isLight={false}>{campaign.title}</MainTitle>
          <ContentText $isLight={true}>{campaign.description}</ContentText>
        </InnerDescriptionContainer>
      </DescriptionContainer>
    </CampaignContentContainer>
  );
};

const useContentHeightAndWidth = () => {
  const height = 50;
  const width = 80;
  return { height, width };
};

export default AidsDay;
