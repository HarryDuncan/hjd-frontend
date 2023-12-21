import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useEffect } from "react";
import { useShopContext } from "views/shop/shop-context/shop.context";

export const useRedirectOnEmptyCart = () => {
  const {
    state: { cart },
  } = useShopContext();
  const handleRouting = useHandleRouting("/");
  useEffect(() => {
    if (cart.length === 0) {
      handleRouting();
    }
  }, [handleRouting, cart]);
};
