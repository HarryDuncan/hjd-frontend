import { ParallaxImage } from "components/images/parallax-image/ParallaxImage";
import type { NextPage } from "next";
import { useContentForPage } from "hooks/content/useContentForPage";
import { ART_IMAGES } from "constants/art.constants";
import {
  BANNER_IMAGE_HOVER_CONFIG,
  MAIN_GALLERY_TOP_OFFSET,
} from "constants/ui.constants";
import { TextScroller } from "components/text-scroller/TextScroller";
import { Gallery } from "views/art/Gallery";
import Head from "next/head";
import { Suspense } from "react";
import DefaultLayout from "layout/DefaultLayout";
import { SectionLoadingFallback } from "components/loading/fallbacks/section-loading/SectionLoadingFallback";

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
      <DefaultLayout hasFooter>
        <Suspense fallback={<SectionLoadingFallback />}>
          <ParallaxImage
            hoverImageConfig={BANNER_IMAGE_HOVER_CONFIG}
            imageUrl={images[0]?.imageUrl ?? ""}
            imageTitle={images[0]?.title ?? ""}
            imageHeightPx={MAIN_GALLERY_TOP_OFFSET}
          >
            <TextScroller text=" Original Paintings " />
          </ParallaxImage>
          <Gallery />
        </Suspense>
      </DefaultLayout>
    </>
  );
};

export default Art;
