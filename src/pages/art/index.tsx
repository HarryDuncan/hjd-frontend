import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import { ParallaxImage } from "components/images/parallax-image/ParallaxImage";
import { InnerContainer } from "components/styled-components/Containers";
import { useArtData } from "hooks/art/useArtData";
import { Painting } from "models/art/types";
import type { NextPage } from "next";
import { Suspense, useMemo } from "react";
import { useHandleRouting } from "hooks/useHandleRouting";
import { useContentForPage } from "hooks/content/useContentForPage";
import {
  ART_GALLERY_LOAD_MORE,
  ART_IMAGES,
  ART_ROOT_URL,
} from "constants/art.constants";
import {
  BANNER_IMAGE_HOVER_CONFIG,
  MAIN_GALLERY_TOP_OFFSET,
} from "constants/ui.constants";
import { SkeletonCard } from "components/loading/skeleton/SkeletonCard";
import { DynamicLayout } from "components/layout/DynamicLayout";
import { TextScroller } from "components/text-scroller/TextScroller";

const Art: NextPage = () => {
  const {
    art: { paintings },
    isError,
  } = useArtData();
  const paintingGalleryItems = usePaintingsInGallery(paintings);
  const { images } = useContentForPage({
    imageSelection: ART_IMAGES,
  });

  const handleRouting = useHandleRouting("art/paintings/");
  return (
    <Suspense fallback={SkeletonCard}>
      <DynamicLayout isError={isError}>
        <ParallaxImage
          hoverImageConfig={BANNER_IMAGE_HOVER_CONFIG}
          imageUrl={images[0]?.imageUrl ?? ""}
          imageTitle={images[0]?.title ?? ""}
          imageHeightPx={MAIN_GALLERY_TOP_OFFSET}
        >
          <TextScroller text=" Original Paintings " />
        </ParallaxImage>
        <InnerContainer $topOffset={MAIN_GALLERY_TOP_OFFSET}>
          <DynamicCardGallery
            items={paintingGalleryItems}
            onClick={handleRouting}
            loadMoreProps={ART_GALLERY_LOAD_MORE}
          />
        </InnerContainer>
      </DynamicLayout>
    </Suspense>
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
