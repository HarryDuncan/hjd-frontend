import {
  FloatingCentralContainer,
  OverlayDiv,
} from "components/containers/Containers";
import { MainTitle } from "components/text/Text";
import FullScreenLayout from "layout/FullScreenLayout";
import CartTable from "views/shop/checkout/checkout-container/cart-table/CartTable";
import { CheckoutTotal } from "views/shop/checkout/checkout-container/checkout-total/CheckoutTotal";
import { CheckoutContentContainer } from "views/shop/checkout/checkout-container/checkout.styles";

import { useEffect } from "react";

const Result = () => {
  useEffect(() => {
    const t = sessionStorage.getItem("formData");
    console.log(t);
  }, []);

  return (
    <FullScreenLayout>
      <FloatingCentralContainer>
        <OverlayDiv />
        <CheckoutContentContainer>
          <MainTitle $isLight={false}>Checkout</MainTitle>
          <CartTable />
          <CheckoutTotal />
        </CheckoutContentContainer>
      </FloatingCentralContainer>
    </FullScreenLayout>
  );
};

export default Result;
