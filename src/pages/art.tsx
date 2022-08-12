import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import Layout from "components/layout/DefaultLayout";
import { ParallaxImage } from "components/parallax-image/ParallaxImage";
import { InnerContainer } from "components/styled-components/Containers";
import { MainTitle } from "components/styled-components/Text";
import { useArtItems } from "hooks/art/useArtItems";
import { Painting } from "models/gallery/types";
import type { NextPage } from "next";
import { useMemo } from "react";

const rootUrl = "/images/art/";
export const HEADER_HEIGHT_OFFSET = 200;
const Art: NextPage = () => {
  const { art } = useArtItems();
  console.log(art);
  const paintingGalleryItems = usePaintingsInGallery(art.paintings);

  return (
    <Layout>
      <ParallaxImage />
      <InnerContainer $topOffset={HEADER_HEIGHT_OFFSET}>
        <MainTitle>Original Paintings</MainTitle>
        <DynamicCardGallery
          items={paintingGalleryItems}
          onClick={() => {
            console.log("tt");
          }}
        />
      </InnerContainer>
    </Layout>
  );
};

function usePaintingsInGallery(paintings: Painting[]) {
  return useMemo(() => {
    return paintings.map(({ imageUrl, title }) => ({
      imageUrl: `${rootUrl}${imageUrl}`,
      title,
    }));
  }, [paintings]);
}

export default Art;
