import dynamic from "next/dynamic";

export const DynamicCardGallery = dynamic(
  () => import("components/card-gallery/CardGallery"),
  {
    ssr: false,
  }
);
