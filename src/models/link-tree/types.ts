import { FetchResponse } from "models/general.types";

export interface LinkTreeLink {
  id: number;
  title: string;
  url: string;
  order: number;
}

export type FetchLinkTreeResponse = FetchResponse & {
  links: LinkTreeLink[];
};
