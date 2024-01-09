import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useEffect } from "react";
import { useShopContext } from "views/shop/shop-context/shop.context";
import { useShopDataFromStorage } from "./useShopDataFromStorage";

export const useRedirectOnEmptyCart = (checkForStoredCart = false) => {
  const {
    state: { cart },
  } = useShopContext();
  const handleRouting = useHandleRouting("/");
  const { cart: storedCart } = useShopDataFromStorage();
  useEffect(() => {
    if (
      (cart.length === 0 && checkForStoredCart === false) ||
      (checkForStoredCart === true && storedCart.length === 0)
    ) {
      handleRouting();
    }
  }, [handleRouting, cart, storedCart]);
};
