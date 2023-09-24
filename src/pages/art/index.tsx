import { ParallaxImage } from "components/images/parallax-image/ParallaxImage";
import type { NextPage } from "next";
import { useContentForPage } from "hooks/content/useContentForPage";
import { ART_IMAGES } from "constants/art.constants";
import {
  BANNER_IMAGE_HOVER_CONFIG,
  MAIN_GALLERY_TOP_OFFSET,
} from "constants/ui.constants";
import { TextScroller } from "components/text-scroller/TextScroller";
import SoftFadeTransition from "components/animations/page-transitions/SoftFadeTransition";
import { PaintingGallery } from "views/art/PaintingGallery";
import Head from "next/head";
import { DynamicLayout } from "layout/DynamicLayout";

const Art: NextPage = () => {
  const { images } = useContentForPage({
    imageSelection: ART_IMAGES,
  });

  return (
    <>
      <Head>
        <title>Art</title>
        <meta
          name="art"
          content="Art, paintings, exhibition and an archive of work by Melbourne based artist Harry J Dee."
          key="desc"
        />
      </Head>
      <SoftFadeTransition>
        <DynamicLayout>
          <ParallaxImage
            hoverImageConfig={BANNER_IMAGE_HOVER_CONFIG}
            imageUrl={images[0]?.imageUrl ?? ""}
            imageTitle={images[0]?.title ?? ""}
            imageHeightPx={MAIN_GALLERY_TOP_OFFSET}
          >
            <TextScroller text=" Original Paintings " />
          </ParallaxImage>
          <PaintingGallery />
        </DynamicLayout>
      </SoftFadeTransition>
    </>
  );
};

export default Art;
