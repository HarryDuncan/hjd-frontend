import { useGetCampaign } from "hooks/campaigns/useGetCampaign";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicCampaignDetails = dynamic(
  () => import("components/campaigns/campaign-details/CampaignDetails"),
  {
    suspense: true,
  }
);

export const CampaignContent = () => {
  const { campaign } = useGetCampaign();
  if (!campaign) return null;

  const getCampaignContent = () => {
    switch (campaign.componentId) {
      case "AidsDay":
      case "PayTheRent":
        return <DynamicCampaignDetails />;
      default:
        console.warn(
          `a campaign details component hasn't been specified for ${campaign.componentId}`
        );
        return <div />;
    }
  };

  return (
    <>
      <Suspense>{getCampaignContent()}</Suspense>
    </>
  );
};
