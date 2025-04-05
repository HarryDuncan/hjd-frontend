import { useMemo } from "react";
import { useShopContext } from "../shop-context/shop.context";
import { ShippingData } from "../checkout/checkout.types";
import { LineItem } from "models/shop/types";

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
          cart: cart ? (JSON.parse(cart) as LineItem[]) : ([] as LineItem[]),
          shipping: shipping ? (JSON.parse(shipping) as ShippingData) : null,
          hasCheckedOut: hasCheckedOut ? JSON.parse(hasCheckedOut) : null,
        };
      }
    } else {
      console.error(savedCart);
      console.error(shippingTotal);
      console.error("sessionStorage is not supported in this environment.");
    }
    return { cart: [] as LineItem[], shipping: null, hasCheckedOut: null };
  }, [savedCart, shippingTotal]);
};
