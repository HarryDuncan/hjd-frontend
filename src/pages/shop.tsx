import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import Layout from "components/layout/DefaultLayout";
import { ParallaxImage } from "components/parallax-image/ParallaxImage";
import { InnerContainer } from "components/styled-components/Containers";
import { MainTitle } from "components/styled-components/Text";
import { useStoreData } from "hooks/store/useStoreData";
import { Product } from "models/shop/types";
import type { NextPage } from "next";
import { useMemo } from "react";
import { HEADER_HEIGHT_OFFSET } from "./art";

const SHOP_IMAGE_URL_ROOT = "/images/shop/";
const Shop: NextPage = () => {
  const {
    shopData: { products },
    loading,
  } = useStoreData();
  console.log([products]);
  const productGalleryItems = useProductsInGallery(products);
  return (
    <Layout>
      <ParallaxImage />
      <InnerContainer $topOffset={HEADER_HEIGHT_OFFSET}>
        <MainTitle>Original Prints</MainTitle>
        <DynamicCardGallery
          items={productGalleryItems}
          onClick={() => {
            console.log("tt");
          }}
        />
      </InnerContainer>
    </Layout>
  );
};

function useProductsInGallery(products: Product[]) {
  return useMemo(() => {
    return products.map(({ title, imageUrl }) => ({
      imageUrl: `${SHOP_IMAGE_URL_ROOT}${imageUrl}`,
      title,
    }));
  }, []);
}

export default Shop;
