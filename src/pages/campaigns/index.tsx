import type { NextPage } from "next";
import React, { useMemo } from "react";
import Layout from "components/layout/DefaultLayout";
import { useCampaignData } from "hooks/campaigns/useCampaignData";
import { ParallaxImage } from "components/images";
import { InnerContainer } from "components/styled-components/Containers";
import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import { Campaign } from "models/campaigns/types";
import { useHandleRouting } from "hooks/useHandleRouting";

const ROOT_URL = "/images/campaigns/";
const HEADER_HEIGHT_OFFSET = 200;
const Campaigns: NextPage = () => {
  const { campaigns } = useCampaignData();
  const campaignGalleryItems = useCampaignGalleryItems(campaigns);
  const handleRouting = useHandleRouting("campaigns/");
  return (
    <Layout>
      <ParallaxImage />
      <InnerContainer $topOffset={HEADER_HEIGHT_OFFSET}>
        <DynamicCardGallery
          items={campaignGalleryItems}
          onClick={handleRouting}
        />
      </InnerContainer>
    </Layout>
  );
};
function useCampaignGalleryItems(campaigns: Campaign[]) {
  return useMemo(() => {
    return campaigns.map(({ coverImage, title, slug }) => ({
      imageUrl: `${ROOT_URL}${coverImage}`,
      title,
      id: slug,
    }));
  }, [campaigns]);
}

export default Campaigns;
