import { useMemo } from "react";
import { CartItem, useShopContext } from "../shop-context/shop.context";
import { ShippingData } from "../checkout/checkout.types";

export const useShopDataFromStorage = () => {
  const {
    state: { cart: savedCart, shippingTotal },
  } = useShopContext();
  return useMemo(() => {
    if (typeof sessionStorage !== "undefined") {
      const cart = sessionStorage.getItem("cart");
      const shipping = sessionStorage.getItem("shipping");
      const hasCheckedOut = sessionStorage.getItem("hasCheckedOut");
      if (cart) {
        return {
          cart: cart ? (JSON.parse(cart) as CartItem[]) : ([] as CartItem[]),
          shipping: shipping ? (JSON.parse(shipping) as ShippingData) : null,
          hasCheckedOut: hasCheckedOut ? JSON.parse(hasCheckedOut) : null,
        };
      }
    } else {
      console.error("sessionStorage is not supported in this environment.");
    }
    return { cart: [] as CartItem[], shipping: null, hasCheckedOut: null };
  }, [savedCart, shippingTotal]);
};
