export type Campaign = {
  id: number;
  title: string;
  description: string;
  donationTotal: string;
  status: string;
  contributions: number;
  siteUrl: string;
  startDate: string;
  endDate: string;
  coverImage: string;
  componentId: string;
  slug: string;
};

export type FetchCampaignResponse = {
  campaigns: Campaign[];
  loading: boolean;
};
