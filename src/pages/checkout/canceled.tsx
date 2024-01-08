import { useRedirectOnEmptyCart } from "views/shop/hooks/useRedirectOnEmptyCheckout";
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
