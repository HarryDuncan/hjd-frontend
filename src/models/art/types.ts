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

export type FetchArtResponse = {
  art: {
    paintings: Painting[];
  };
  loading: boolean;
};
