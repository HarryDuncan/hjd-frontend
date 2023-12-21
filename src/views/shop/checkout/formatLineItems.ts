import { CURRENCIES } from "constants/shop.constants";
import { CartItem } from "../shop-context/shop.context";

export const formatLineItems = (
  cartItems: CartItem[],
  shippingCost: number
) => {
  const lineItems = cartItems.flatMap((selectedProduct) => ({
    price_data: {
      currency: CURRENCIES.AUD,
      unit_amount: (selectedProduct.product.price || 0) * 100,
      product_data: {
        name: selectedProduct.product.title,
      },
    },
    quantity: selectedProduct.quantity,
  }));
  lineItems.push({
    price_data: {
      currency: CURRENCIES.AUD,
      unit_amount: shippingCost * 100,
      product_data: {
        name: "shipping",
      },
    },
    quantity: 1,
  });
  return lineItems;
};
