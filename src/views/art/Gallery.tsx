import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import { InnerContainer } from "components/containers/Containers";
import { ART_GALLERY_LOAD_MORE, ART_ROOT_URL } from "constants/art.constants";

import { useArtData } from "hooks/art/useArtData";
import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { Art } from "models/art/types";
import { useMemo } from "react";

export const Gallery = () => {
  const handleRouting = useHandleRouting("art/piece/");
  const { art } = useArtData();
  const paintingGalleryItems = useArtInGallery(art);
  return (
    <InnerContainer>
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
        .map(({ imageUrls, title, slug, yearCompleted }) => ({
          imageUrl: `${ART_ROOT_URL}${imageUrls[0]}`,
          imageUrls: imageUrls.map((imageUrl) => `${ART_ROOT_URL}${imageUrl}`),
          title,
          slug,
          id: slug,
          yearCompleted,
        }))
        .sort((a, b) => b.yearCompleted - a.yearCompleted),
    [art]
  );
