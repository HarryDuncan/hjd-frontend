export interface TechContent {
  id: number;
  name: string;
  blurb: string;
  skill: number;
  category: string;
  image: string;
}

export interface ReturnedTechData {
  loading: boolean;
  techData: { tech: TechContent[] };
}
