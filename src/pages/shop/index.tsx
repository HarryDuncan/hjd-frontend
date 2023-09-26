import type { NextPage } from "next";
import { ParallaxImage } from "components/images/parallax-image/ParallaxImage";
import { useContentForPage } from "hooks/content/useContentForPage";
import {
  BANNER_IMAGE_HOVER_CONFIG,
  MAIN_GALLERY_TOP_OFFSET,
} from "constants/ui.constants";
import { SHOP_IMAGES } from "constants/shop.constants";
import { TextScroller } from "components/text-scroller/TextScroller";
import Head from "next/head";
import { ProductGallery } from "views/shop/product-gallery/ProductGallery";
import DefaultLayout from "layout/DefaultLayout";

const Shop: NextPage = () => {
  const { images } = useContentForPage({ imageSelection: SHOP_IMAGES });

  return (
    <>
      <Head>
        <title>Shop</title>
        <meta
          name="Shop"
          content="Shop for limited edition or original work by Melbourne based artist Harry J Dee."
          key="desc"
        />
      </Head>
      <DefaultLayout>
        <ParallaxImage
          hoverImageConfig={BANNER_IMAGE_HOVER_CONFIG}
          imageTitle="shop-header"
          imageUrl={images[0]?.imageUrl ?? ""}
          imageHeightPx={MAIN_GALLERY_TOP_OFFSET}
        >
          <TextScroller text=" Limited Edition " />
        </ParallaxImage>
        <ProductGallery />
      </DefaultLayout>
    </>
  );
};

export default Shop;
