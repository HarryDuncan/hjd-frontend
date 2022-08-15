export type FetchArtResponse = {
  art: {
    paintings: Painting[];
  };
  loading: boolean;
};

export type Painting = {
  description: string;
  externalUrl: string;
  id: number;
  imageUrl: string;
  medium: string;
  title: string;
  yearCompleted: number;
};
