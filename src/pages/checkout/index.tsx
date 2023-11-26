import Head from "next/head";
import { DefaultScene } from "components/animations/scenes/DefaultScene";
import FullScreenLayout from "layout/FullScreenLayout";
import CheckoutPreview from "views/shop/checkout-container/CheckoutContainer";
import { LinkTreeContainer } from "views/link-tree/LinkTree.styles";

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Harry J Dee</title>
        <meta
          name="Harry J Dee"
          content="The online virtual headquarters of artist Harry J Dee"
          key="desc"
        />
      </Head>
      <FullScreenLayout>
        <LinkTreeContainer>
          <CheckoutPreview />
        </LinkTreeContainer>
        <DefaultScene />
      </FullScreenLayout>
    </>
  );
};

export default Checkout;
