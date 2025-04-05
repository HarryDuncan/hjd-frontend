import { useMemo } from "react";
import { LineItem } from "models/shop/types";

export const useCalculateTotal = (
  cart: LineItem[],
  shippingTotal: number | null
) =>
  useMemo(() => {
    return (
      cart.reduce((prev, curr) => {
        if (curr && curr.price) {
          return curr.price * curr.quantity + prev;
        }
        return 0;
      }, 0) + (shippingTotal || 0)
    );
  }, [cart, shippingTotal]);
