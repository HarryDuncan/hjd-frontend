import type { NextPage } from "next";
import React, { useMemo } from "react";
import Layout from "components/layout/DefaultLayout";
import { useCampaignData } from "hooks/campaigns/useCampaignData";
import { ParallaxImage } from "components/images";
import { InnerContainer } from "components/styled-components/Containers";
import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import { useHandleRouting } from "hooks/useHandleRouting";
import { useContentForPage } from "hooks/content/useContentForPage";
import { MAIN_GALLERY_TOP_OFFSET } from "constants/ui.constants";
import {
  CAMPAIGN_IMAGES,
  CAMPAIGN_ROOT_URL,
} from "constants/campaign.constants";
import { CampaignCardFooter } from "components/campaigns/campaign-card-footer";

const Campaigns: NextPage = () => {
  const campaignGalleryItems = useCampaignGalleryItems();
  const handleRouting = useHandleRouting("campaigns/");
  const { images } = useContentForPage({ imageSelection: CAMPAIGN_IMAGES });
  return (
    <Layout>
      <ParallaxImage
        imageTitle="campaign-cover-img"
        imageUrl={images[0]?.imageUrl ?? ""}
      />
      <InnerContainer $topOffset={MAIN_GALLERY_TOP_OFFSET}>
        <DynamicCardGallery
          items={campaignGalleryItems}
          onClick={handleRouting}
        />
      </InnerContainer>
    </Layout>
  );
};
function useCampaignGalleryItems() {
  const { campaigns } = useCampaignData();
  return useMemo(() => {
    return campaigns.map(({ coverImage, title, slug }) => ({
      imageUrl: `${CAMPAIGN_ROOT_URL}${coverImage}`,
      title,
      id: slug,
      footer: <CampaignCardFooter title={title} />,
    }));
  }, [campaigns]);
}

export default Campaigns;
