import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import Layout from "components/layout/DefaultLayout";
import { ParallaxImage } from "components/images/parallax-image/ParallaxImage";
import { InnerContainer } from "components/styled-components/Containers";
import { useArtData } from "hooks/art/useArtData";

import { Painting } from "models/art/types";
import type { NextPage } from "next";
import { useMemo } from "react";
import { useHandleRouting } from "hooks/useHandleRouting";

const rootUrl = "/images/art/";
export const HEADER_HEIGHT_OFFSET = 200;
const Art: NextPage = () => {
  const {
    art: { paintings },
  } = useArtData();
  const paintingGalleryItems = usePaintingsInGallery(paintings);

  const handleRouting = useHandleRouting("art/paintings/");
  return (
    <Layout>
      <ParallaxImage mainTitle="Original Paintings" />
      <InnerContainer $topOffset={HEADER_HEIGHT_OFFSET}>
        <DynamicCardGallery
          items={paintingGalleryItems}
          onClick={handleRouting}
        />
      </InnerContainer>
    </Layout>
  );
};

function usePaintingsInGallery(paintings: Painting[]) {
  return useMemo(() => {
    return paintings.map(({ imageUrl, title, id }) => ({
      imageUrl: `${rootUrl}${imageUrl}`,
      title,
      id,
    }));
  }, [paintings]);
}

export default Art;
