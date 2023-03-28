import { FetchResponse } from "models/general.types";

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

export type FetchCampaignResponse = FetchResponse & {
  campaigns: Campaign[];
};
