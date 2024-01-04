import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  FloatingCentralContainer,
  OverlayDiv,
} from "components/containers/Containers";
import CartTable from "./cart-table/CartTable";
import { CheckoutContentContainer } from "./checkout.styles";
import { MainTitle } from "components/text/Text";
import { CheckoutTotal } from "./checkout-total/CheckoutTotal";
import { ShippingOptions } from "./shipping-options/ShippingOptions";
import { useShopContext } from "views/shop/shop-context/shop.context";
import { ActionButton } from "components/buttons/action-button/ActionButton";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

export default function CheckoutPreview() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const {
    state: { cart, shippingTotal },
  } = useShopContext();
  const isCheckoutDisabled = shippingTotal === null;
  const handleSubmit = () => {};
  return (
    <FloatingCentralContainer>
      <OverlayDiv />
      <CheckoutContentContainer>
        <MainTitle $isLight={false}>Checkout</MainTitle>
        <CartTable />
        <ShippingOptions />
        <CheckoutTotal />
        <form action="/api/checkout_sessions" method="POST">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="shippingTotal"
            value={JSON.stringify(shippingTotal)}
          />
          <section>
            <ActionButton
              isDisabled={isCheckoutDisabled}
              onClick={handleSubmit}
              title={" Checkout"}
            />
          </section>
        </form>
      </CheckoutContentContainer>
    </FloatingCentralContainer>
  );
}
