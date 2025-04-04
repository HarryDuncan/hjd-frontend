import { FetchResponse } from "models/general.types";

export type Art = {
  description: string;
  externalUrl: string;
  id: number;
  imageUrls: string[];
  medium: string;
  title: string;
  yearCompleted: number;
  slug: string;
  dimensions: string;
};

export type FetchArtResponse = FetchResponse & {
  art: Art[];
};
