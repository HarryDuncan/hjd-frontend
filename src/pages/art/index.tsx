import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import Layout from "components/layout/DefaultLayout";
import { ParallaxImage } from "components/images/parallax-image/ParallaxImage";
import { InnerContainer } from "components/styled-components/Containers";
import { useArtData } from "hooks/art/useArtData";

import { Painting } from "models/art/types";
import type { NextPage } from "next";
import { useMemo } from "react";
import { useHandleRouting } from "hooks/useHandleRouting";
import { useContentForPage } from "hooks/content/useContentForPage";
import {
  ART_BANNER_CONFIG,
  ART_IMAGES,
  ART_ROOT_URL,
} from "constants/art.constants";
import { MAIN_GALLERY_TOP_OFFSET } from "constants/ui.constants";

const Art: NextPage = () => {
  const {
    art: { paintings },
  } = useArtData();
  const paintingGalleryItems = usePaintingsInGallery(paintings);
  const { images } = useContentForPage({
    imageSelection: ART_IMAGES,
  });

  const handleRouting = useHandleRouting("art/paintings/");
  return (
    <Layout>
      <ParallaxImage
        hoverImageConfig={ART_BANNER_CONFIG}
        imageUrl={images[0]?.imageUrl ?? ""}
        imageTitle={images[0]?.title ?? ""}
        mainTitle={"View Original Pieces"}
      />
      <InnerContainer $topOffset={MAIN_GALLERY_TOP_OFFSET}>
        <DynamicCardGallery
          items={paintingGalleryItems}
          onClick={handleRouting}
        />
      </InnerContainer>
    </Layout>
  );
};

function usePaintingsInGallery(paintings: Painting[]) {
  return useMemo(
    () =>
      paintings.map(({ imageUrl, title, slug }) => ({
        imageUrl: `${ART_ROOT_URL}${imageUrl}`,
        title,
        slug,
        id: slug,
      })),
    [paintings]
  );
}

export default Art;
