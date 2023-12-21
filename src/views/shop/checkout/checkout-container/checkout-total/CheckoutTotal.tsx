import { useMemo } from "react";
import { ContentSubText, ContentText } from "components/text/Text";
import { CheckoutSection } from "../checkout.styles";
import { useShopContext } from "views/shop/shop-context/shop.context";

export const CheckoutTotal = () => {
  const total = useCalculateTotal();
  return (
    <CheckoutSection>
      <ContentText>Total:${total} AUD</ContentText>
      <ContentSubText>Tax and gst included</ContentSubText>
    </CheckoutSection>
  );
};

const useCalculateTotal = () => {
  const {
    state: { cart, shippingTotal },
  } = useShopContext();
  return useMemo(() => {
    return (
      cart.reduce((prev, curr) => {
        if (curr.product && curr.product.price) {
          return curr.product.price * curr.quantity + prev;
        }
        return 0;
      }, 0) + shippingTotal
    );
  }, [cart, shippingTotal]);
};
