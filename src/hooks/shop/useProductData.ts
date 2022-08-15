import { useParams } from "hooks/useParams";
import { ReturnedShopData } from "models/shop/types";
import { useQuery } from "react-query";
import { getShopData } from "services/shop/getShopData";

export const useProductData = () => {
  const productId = useParams("productId");
  const productData = useQuery<ReturnedShopData>(["shop-data"], () =>
    getShopData()
  );
  if (!productData.data || !productId) return { product: null, loading: true };
  const product = productData.data.shopData.products.find(
    ({ id }) => id === Number(productId)
  );
  return { product, loading: false };
};
