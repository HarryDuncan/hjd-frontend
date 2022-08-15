import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import Layout from "components/layout/DefaultLayout";
import { ParallaxImage } from "components/images/parallax-image/ParallaxImage";
import { InnerContainer } from "components/styled-components/Containers";
import { useShopData } from "hooks/shop/useShopData";
import { Product } from "models/shop/types";
import type { NextPage } from "next";
import { useMemo } from "react";
import { useHandleRouting } from "hooks/useHandleRouting";

const HEADER_HEIGHT_OFFSET = 200;
const SHOP_IMAGE_URL_ROOT = "/images/shop/";
const Shop: NextPage = () => {
  const {
    shopData: { products },
    loading,
  } = useShopData();
  const productGalleryItems = useProductsInGallery(products);

  const handleRouting = useHandleRouting("shop/products/");
  return (
    <Layout>
      <ParallaxImage mainTitle="Original Prints" />
      <InnerContainer $topOffset={HEADER_HEIGHT_OFFSET}>
        <DynamicCardGallery
          items={productGalleryItems}
          onClick={handleRouting}
        />
      </InnerContainer>
    </Layout>
  );
};

function useProductsInGallery(products: Product[]) {
  return useMemo(() => {
    return products.map(({ title, imageUrl, id }) => ({
      imageUrl: `${SHOP_IMAGE_URL_ROOT}${imageUrl}`,
      title,
      id,
    }));
  }, [products]);
}

export default Shop;
