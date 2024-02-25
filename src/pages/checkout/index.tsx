import Head from "next/head";
import { DefaultScene } from "components/animations/scenes/DefaultScene";
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
        <DefaultScene />
      </FullScreenLayout>
    </>
  );
};

export default Checkout;
