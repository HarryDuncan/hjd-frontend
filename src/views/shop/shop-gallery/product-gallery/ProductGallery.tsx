import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import { InnerContainer } from "components/containers/Containers";
import { SHOP_IMAGE_URL_ROOT, SHOP_LOAD_MORE } from "constants/shop.constants";
import { MAIN_GALLERY_TOP_OFFSET } from "constants/ui.constants";
import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useProductsWithVariations } from "hooks/shop/useProductsWithVariations";
import { useShopData } from "hooks/shop/useShopData";
import { useMemo } from "react";
import { ProductCardFooter } from "../product-card-footer";

export const ProductGallery = () => {
  const handleRouting = useHandleRouting("shop/products/");
  const productGalleryItems = useProductsInGallery();
  return (
    <InnerContainer $topOffset={MAIN_GALLERY_TOP_OFFSET}>
      <DynamicCardGallery
        items={productGalleryItems}
        onClick={handleRouting}
        loadMoreProps={SHOP_LOAD_MORE}
      />
    </InnerContainer>
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
