import { SHOP_IMAGE_URL_ROOT } from "constants/shop.constants";
import { useParams } from "hooks/routing/useParams";
import { ReturnedShopData } from "models/shop/types";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { getShopData } from "services/shop/getShopData";

export const useProductData = () => {
  const productId = useParams("productId");
  const productData = useQuery<ReturnedShopData>(["shop-data"], () =>
    getShopData()
  );
  const product = productData.data?.shopData.products.find(
    ({ id }) => id === Number(productId)
  );

  const formattedProduct = useMemo(() => {
    return {
      ...product,
      imageUrls: product?.imageUrls.map(
        (imageUrl) => `${SHOP_IMAGE_URL_ROOT}${imageUrl}`
      ),
    };
  }, [product]);

  if (!product) return { product: null, loading: true };

  return { product: formattedProduct, loading: false };
};
