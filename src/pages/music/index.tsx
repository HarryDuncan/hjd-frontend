import type { NextPage } from "next";
import { useMemo } from "react";
import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import Layout from "components/layout/DefaultLayout";
import { ParallaxImage } from "components/images/parallax-image/ParallaxImage";
import { InnerContainer } from "components/styled-components/Containers";
import { useMixesData } from "hooks/mixes/useMixesData";
import { MAIN_GALLERY_TOP_OFFSET } from "constants/ui.constants";
import { useContentForPage } from "hooks/content/useContentForPage";
import { MUSIC_IMAGES, MUSIC_ROOT_URL } from "constants/music.constants";

const Music: NextPage = () => {
  const mixGalleryItems = useMixesInGallery();
  const { images } = useContentForPage({ imageSelection: MUSIC_IMAGES });
  return (
    <Layout>
      <ParallaxImage
        imageTitle="music-cover-img"
        mainTitle="Mixes with visuals"
        imageUrl={images[0]?.imageUrl ?? ""}
      />
      <InnerContainer $topOffset={MAIN_GALLERY_TOP_OFFSET}>
        <DynamicCardGallery
          items={mixGalleryItems}
          onClick={() => {
            console.log("tt");
          }}
        />
      </InnerContainer>
    </Layout>
  );
};

function useMixesInGallery() {
  const { mixes } = useMixesData();
  return useMemo(() => {
    return mixes.map(({ imageUrl, title }) => ({
      imageUrl: `${MUSIC_ROOT_URL}${imageUrl}`,
      title,
    }));
  }, [mixes]);
}

export default Music;
