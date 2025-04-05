"use client";

import { DynamicAnimatedScene } from "components/animations/scenes/AnimatedScene";
import FullScreenLayout from "layout/FullScreenLayout";
import CartStorageHandler from "views/shop/checkout/cancel/CartStorageHandler";
import CheckoutPreview from "views/shop/checkout/checkout-container/CheckoutContainer";
import { useRedirectOnEmptyCart } from "views/shop/hooks/useRedirectOnEmptyCheckout";

const Result = () => {
  useRedirectOnEmptyCart(true);
  return (
    <FullScreenLayout>
      <CartStorageHandler resetInventoryEnabled />
      <CheckoutPreview />
      <DynamicAnimatedScene configId="default-scene" />
    </FullScreenLayout>
  );
};

export default Result;
