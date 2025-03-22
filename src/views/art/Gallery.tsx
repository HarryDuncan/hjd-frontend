import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import { InnerContainer } from "components/containers/Containers";
import { ART_GALLERY_LOAD_MORE, ART_ROOT_URL } from "constants/art.constants";
import { MAIN_GALLERY_TOP_OFFSET } from "constants/ui.constants";
import { useArtData } from "hooks/art/useArtData";
import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { Art } from "models/art/types";
import { useMemo } from "react";

export const Gallery = () => {
  const handleRouting = useHandleRouting("art/piece/");
  const { art } = useArtData();
  const paintingGalleryItems = useArtInGallery(art);
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

const useArtInGallery = (art: Art[]) =>
  useMemo(
    () =>
      art
        .map(({ imageUrl, title, slug, yearCompleted }) => ({
          imageUrl: `${ART_ROOT_URL}${imageUrl}`,
          title,
          slug,
          id: slug,
          yearCompleted,
        }))
        .sort((a, b) => b.yearCompleted - a.yearCompleted),
    [art]
  );
