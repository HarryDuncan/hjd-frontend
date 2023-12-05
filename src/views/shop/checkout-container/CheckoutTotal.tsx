import { useMemo } from "react";
import { useShopContext } from "../shop-context/shop.context";
import { ContentText } from "components/text/Text";

export const CheckoutTotal = () => {
  const {
    state: { cart },
  } = useShopContext();

  const total = useCalculateTotal();
  return (
    <div>
      <ContentText>Total: AUD ${total}</ContentText>
    </div>
  );
};

const useCalculateTotal = () => {
  const {
    state: { cart },
  } = useShopContext();
  return useMemo(() => {
    return cart.reduce((prev, curr) => {
      if (curr.product && curr.product.price) {
        return curr.product.price * curr.quantity + prev;
      }
      return 0;
    }, 0);
  }, [cart]);
};
