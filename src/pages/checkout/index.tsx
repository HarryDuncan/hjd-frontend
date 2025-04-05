"use client";

import Head from "next/head";
import { DynamicAnimatedScene } from "components/animations/scenes/AnimatedScene";
import FullScreenLayout from "layout/FullScreenLayout";
import CheckoutPreview from "views/shop/checkout/checkout-container/CheckoutContainer";
import { useRedirectOnEmptyCart } from "views/shop/hooks/useRedirectOnEmptyCheckout";

const Checkout = () => {
  useRedirectOnEmptyCart();
  return (
    <>
      <Head>
        <title>Harry J Dee</title>
        <meta
          name="Checkout"
          content="The online virtual headquarters of artist Harry J Dee"
          key="desc"
        />
      </Head>
      <FullScreenLayout>
        <CheckoutPreview />
        <DynamicAnimatedScene configId="default-scene" />
      </FullScreenLayout>
    </>
  );
};

export default Checkout;
