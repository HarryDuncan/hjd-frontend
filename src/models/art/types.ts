import { FetchResponse } from "models/general.types";

export type Painting = {
  description: string;
  externalUrl: string;
  id: number;
  imageUrl: string;
  medium: string;
  title: string;
  yearCompleted: number;
  slug: string;
  dimensions: string;
};

export type FetchPaintingsResponse = FetchResponse & {
  paintings: {
    paintings: Painting[];
  };
};
