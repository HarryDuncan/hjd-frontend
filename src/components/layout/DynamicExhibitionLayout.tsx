import dynamic from "next/dynamic";

export const DynamicExhibitionLayout = dynamic(
  () => import("components/layout/ExhibitionLayout"),
  {
    ssr: false,
  }
);
