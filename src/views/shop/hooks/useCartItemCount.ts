import { useMemo } from "react";
import { useShopContext } from "../shop-context/shop.context";

export const useCartItemCount = () => {
  const {
    state: { cart },
  } = useShopContext();

  return useMemo(
    () =>
      cart.reduce((prev, curr) => {
        return prev + curr.quantity;
      }, 0),
    [cart]
  );
};
