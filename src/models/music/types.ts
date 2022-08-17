export type MixItem = {
  id: number;
  title: string;
  description: string;
  audioUrl: string;
  imageUrl: string;
  slug: string;
};

export type MixesData = {
  mixes: MixItem[];
};
