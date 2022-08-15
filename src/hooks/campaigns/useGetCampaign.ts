import { useParams } from "hooks/useParams";
import { FetchCampaignResponse } from "models/campaigns/types";
import { useQuery } from "react-query";
import { getCampaigns } from "services/campaigns/campaigns";

export const useGetCampaign = () => {
  const campaignSlug = useParams("slug");
  const campaignData = useQuery<FetchCampaignResponse>(["campaign-data"], () =>
    getCampaigns()
  );
  if (!campaignData?.data || !campaignSlug)
    return { campaign: [], loading: true };
  const campaign = campaignData.data.campaigns.find(
    ({ slug }) => slug === campaignSlug
  );
  return { campaign, loading: true };
};
