import { useGetCampaign } from "hooks/campaigns/useGetCampaign";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicAidsDay = dynamic(
  () => import("components/campaigns/content/AidsDay"),
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
        return <DynamicAidsDay />;
      default:
        <div />;
    }
  };

  return (
    <>
      <Suspense>{getCampaignContent()}</Suspense>
    </>
  );
};
