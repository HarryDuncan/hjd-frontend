import type { NextPage } from "next";
import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import { ParallaxImage } from "components/images/parallax-image/ParallaxImage";
import { InnerContainer } from "components/styled-components/Containers";
import { useHandleRouting } from "hooks/useHandleRouting";
import { useContentForPage } from "hooks/content/useContentForPage";
import {
  BANNER_IMAGE_HOVER_CONFIG,
  MAIN_GALLERY_TOP_OFFSET,
} from "constants/ui.constants";
import { SHOP_IMAGES, SHOP_IMAGE_URL_ROOT } from "constants/shop.constants";
import { useShopData } from "hooks/shop/useShopData";
import { useProductsWithVariations } from "hooks/shop/useProductsWithVariations";
import { useMemo } from "react";
import { ProductCardFooter } from "components/shop";
import { DynamicLayout } from "components/layout/DynamicLayout";
import { TextScroller } from "components/text-scroller/TextScroller";

const Shop: NextPage = () => {
  const productGalleryItems = useProductsInGallery();
  const { images } = useContentForPage({ imageSelection: SHOP_IMAGES });
  const handleRouting = useHandleRouting("shop/products/");
  return (
    <DynamicLayout>
      <ParallaxImage
        hoverImageConfig={BANNER_IMAGE_HOVER_CONFIG}
        imageTitle="shop-header"
        imageUrl={images[0]?.imageUrl ?? ""}
        imageHeightPx={MAIN_GALLERY_TOP_OFFSET}
      >
        <TextScroller text=" Limited Edition " />
      </ParallaxImage>
      <InnerContainer $topOffset={MAIN_GALLERY_TOP_OFFSET}>
        <DynamicCardGallery
          items={productGalleryItems}
          onClick={handleRouting}
        />
      </InnerContainer>
    </DynamicLayout>
  );
};

const useProductsInGallery = () => {
  const {
    shopData: { products, productVariations },
  } = useShopData();
  const formattedProducts = useProductsWithVariations(
    products,
    productVariations
  );

  return useMemo(
    () =>
      formattedProducts.map(
        ({ title, imageUrl, id, variations, isSoldOut, price }) => ({
          imageUrl: `${SHOP_IMAGE_URL_ROOT}${imageUrl}`,
          title,
          id,
          footer: (
            <ProductCardFooter
              title={title}
              variations={variations ?? []}
              price={price}
              isSoldOut={isSoldOut ?? false}
            />
          ),
        })
      ),
    [formattedProducts]
  );
};

export default Shop;
