export interface LinkTreeLink {
  id: number;
  title: string;
  url: string;
  order: number;
}

export interface FetchLinkTreeResponse {
  links: LinkTreeLink[];
  loading: boolean;
}
