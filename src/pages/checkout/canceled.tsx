import { useRedirectOnEmptyCart } from "hooks/shop/useRedirectOnEmptyCheckout";
import FullScreenLayout from "layout/FullScreenLayout";

const Result = () => {
  useRedirectOnEmptyCart();
  return (
    <FullScreenLayout>
      <div></div>
    </FullScreenLayout>
  );
};

export default Result;
