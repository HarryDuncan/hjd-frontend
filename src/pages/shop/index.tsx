import type { NextPage } from "next";
import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import Layout from "components/layout/DefaultLayout";
import { ParallaxImage } from "components/images/parallax-image/ParallaxImage";
import { InnerContainer } from "components/styled-components/Containers";
import { useHandleRouting } from "hooks/useHandleRouting";
import { useContentForPage } from "hooks/content/useContentForPage";
import { MAIN_GALLERY_TOP_OFFSET } from "constants/ui.constants";
import { SHOP_IMAGES, SHOP_IMAGE_URL_ROOT } from "constants/shop.contants";
import { useShopData } from "hooks/shop/useShopData";
import { useProductsWithVariations } from "hooks/shop/useProductsWithVariations";
import { useMemo } from "react";
import { ProductCardFooter } from "components/shop";

const Shop: NextPage = () => {
  const productGalleryItems = useProductsInGallery();
  const { images } = useContentForPage({ imageSelection: SHOP_IMAGES });
  const handleRouting = useHandleRouting("shop/products/");
  console.log(productGalleryItems);
  return (
    <Layout>
      <ParallaxImage
        imageTitle="shop-header"
        imageUrl={images[0]?.imageUrl ?? ""}
      />
      <InnerContainer $topOffset={MAIN_GALLERY_TOP_OFFSET}>
        <DynamicCardGallery
          items={productGalleryItems}
          onClick={handleRouting}
        />
      </InnerContainer>
    </Layout>
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

  return useMemo(() => {
    return formattedProducts.map(
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
    );
  }, [formattedProducts]);
};

export default Shop;
