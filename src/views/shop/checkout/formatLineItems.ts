import { CURRENCIES } from "constants/shop.constants";
import { LineItem } from "models/shop/types";

export const formatLineItems = (
  cartItems: LineItem[],
  shippingCost: number
) => {
  const lineItems = cartItems.flatMap((selectedProduct) => ({
    price_data: {
      currency: CURRENCIES.AUD,
      unit_amount: (selectedProduct.price || 0) * 100,
      product_data: {
        name: selectedProduct.title,
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
