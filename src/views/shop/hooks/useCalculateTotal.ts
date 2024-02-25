import { useMemo } from "react";
import { CartItem } from "../shop-context/shop.context";

export const useCalculateTotal = (
  cart: CartItem[],
  shippingTotal: number | null
) =>
  useMemo(() => {
    return (
      cart.reduce((prev, curr) => {
        if (curr.product && curr.product.price) {
          return curr.product.price * curr.quantity + prev;
        }
        return 0;
      }, 0) + (shippingTotal || 0)
    );
  }, [cart, shippingTotal]);
