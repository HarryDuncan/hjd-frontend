import { useMemo } from "react";
import { CartItem, useShopContext } from "../shop-context/shop.context";

export const useShopDataFromStorage = () => {
  const {
    state: { cart: savedCart, shippingTotal },
  } = useShopContext();
  return useMemo(() => {
    if (typeof sessionStorage !== "undefined") {
      const cart = sessionStorage.getItem("cart");
      const shipping = sessionStorage.getItem("shipping");
      if (cart) {
        return {
          cart: cart ? (JSON.parse(cart) as CartItem[]) : ([] as CartItem[]),
          shipping: shipping ? JSON.parse(shipping) : null,
        };
      }
    } else {
      console.error("sessionStorage is not supported in this environment.");
    }
    return { cart: [] as CartItem[], shipping: null };
  }, [savedCart, shippingTotal]);
};
