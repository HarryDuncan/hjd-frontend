import { useShopContext } from "views/shop/shop-context/shop.context";

export const useProductData = () => {
  const {
    state: { cart },
  } = useShopContext();
};
