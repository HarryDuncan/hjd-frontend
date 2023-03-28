import { NETWORK_STATUS_TYPES } from "constants/api.constants";
import { FetchCampaignResponse } from "models/campaigns/types";
import { useQuery } from "react-query";
import { getCampaigns } from "services/campaigns/campaigns";

export const useCampaignData = () => {
  const campaignData = useQuery<FetchCampaignResponse>(["campaign-data"], () =>
    getCampaigns()
  );

  return (
    campaignData?.data ?? {
      campaigns: [],
      loading: true,
      isError: campaignData.status === NETWORK_STATUS_TYPES.ERROR,
    }
  );
};
