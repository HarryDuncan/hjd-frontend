import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import { InnerContainer } from "components/containers/Containers";
import { SHOP_IMAGE_URL_ROOT, SHOP_LOAD_MORE } from "constants/shop.constants";
import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useProductsWithVariations } from "views/shop/hooks/useProductsWithVariations";
import { useShopData } from "views/shop/hooks/useShopData";
import { useMemo } from "react";
import { ProductCardFooter } from "../product-card-footer";

export const ProductGallery = () => {
  const handleRouting = useHandleRouting("shop/products/");
  const productGalleryItems = useProductsInGallery();
  return (
    <InnerContainer>
      <DynamicCardGallery
        items={productGalleryItems}
        onClick={handleRouting}
        loadMoreProps={SHOP_LOAD_MORE}
      />
    </InnerContainer>
  );
};

const useProductsInGallery = () => {
  const { products, productVariations } = useShopData();
  const formattedProducts = useProductsWithVariations(
    products,
    productVariations
  );

  return useMemo(
    () =>
      formattedProducts.map(
        ({ title, imageUrls, id, variations, isSoldOut, price }) => ({
          imageUrl: `${SHOP_IMAGE_URL_ROOT}${imageUrls[0]}`,
          imageUrls: imageUrls.map(
            (imageUrl) => `${SHOP_IMAGE_URL_ROOT}${imageUrl}`
          ),
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
