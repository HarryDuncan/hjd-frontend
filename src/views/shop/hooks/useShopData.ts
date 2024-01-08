import { ReturnedShopData } from "models/shop/types";
import { useQuery } from "react-query";
import { getShopData } from "services/shop/getShopData";

export const useShopData = () => {
  const productData = useQuery<ReturnedShopData>(["shop-data"], () =>
    getShopData()
  );
  return (
    productData.data ?? {
      shopData: {
        products: [],
        productVariations: [],
        shippingZones: [],
        shippingOptions: [],
      },
      loading: true,
    }
  );
};
