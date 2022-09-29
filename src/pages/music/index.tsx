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
import { useHandleRouting } from "hooks/useHandleRouting";
import { ContentText } from "components/styled-components/Text";
import { Title } from "components/shop/product-card-footer/ProductCardFooter.styles";

const Music: NextPage = () => {
  const mixGalleryItems = useMixesInGallery();
  const { images } = useContentForPage({ imageSelection: MUSIC_IMAGES });
  const handleRouting = useHandleRouting("music/visualizer/");
  return (
    <Layout>
      <ParallaxImage
        imageTitle="music-cover-img"
        imageUrl={images[0]?.imageUrl ?? ""}
      />

      <InnerContainer $topOffset={MAIN_GALLERY_TOP_OFFSET}>
        <ContentText>
          The music visualizer project was done in 2020. Where one could stream
          music with custom made visuals using javascript
        </ContentText>
        <DynamicCardGallery items={mixGalleryItems} onClick={handleRouting} />
      </InnerContainer>
    </Layout>
  );
};

function useMixesInGallery() {
  const { mixes } = useMixesData();
  return useMemo(() => {
    return mixes.map(({ imageUrl, title, slug }) => ({
      imageUrl: `${MUSIC_ROOT_URL}${imageUrl}`,
      title,
      slug,
      id: slug,
    }));
  }, [mixes]);
}

export default Music;
