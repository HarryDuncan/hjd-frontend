import {
  Product,
  ProductVariations,
  ShippingOption,
  ShippingZone,
} from "models/shop/types";
import { useQuery } from "react-query";
import { getShopData } from "services/store/getStoreData";

type ProductData = {
  shopData: {
    products: Product[];
    productVariations: ProductVariations[];
    shippingZones: ShippingZone[];
    ShippingOptions: ShippingOption[];
  };
  loading: boolean;
};
export const useStoreData = () => {
  const productData = useQuery<ProductData>(["store-data"], () =>
    getShopData()
  );

  return (
    productData.data ?? {
      shopData: {
        products: [],
        productVariations: [],
        shippingZones: [],
        ShippingOptions: [],
      },
      loading: true,
    }
  );
};
