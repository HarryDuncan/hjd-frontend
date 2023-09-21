import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import { InnerContainer } from "components/containers/Containers";
import { ART_GALLERY_LOAD_MORE, ART_ROOT_URL } from "constants/art.constants";
import { MAIN_GALLERY_TOP_OFFSET } from "constants/ui.constants";
import { useArtData } from "hooks/art/useArtData";
import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { Painting } from "models/art/types";
import { useMemo } from "react";

export const PaintingGallery = () => {
  const handleRouting = useHandleRouting("art/paintings/");
  const {
    paintings: { paintings },
  } = useArtData();
  const paintingGalleryItems = usePaintingsInGallery(paintings);
  return (
    <InnerContainer $topOffset={MAIN_GALLERY_TOP_OFFSET}>
      <DynamicCardGallery
        items={paintingGalleryItems}
        onClick={handleRouting}
        loadMoreProps={ART_GALLERY_LOAD_MORE}
      />
    </InnerContainer>
  );
};

const usePaintingsInGallery = (paintings: Painting[]) =>
  useMemo(
    () =>
      paintings.map(({ imageUrl, title, slug }) => ({
        imageUrl: `${ART_ROOT_URL}${imageUrl}`,
        title,
        slug,
        id: slug,
      })),
    [paintings]
  );
