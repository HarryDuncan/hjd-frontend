import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useShopContext } from "../shop-context/shop.context";
import {
  FloatingCentralContainer,
  OverlayDiv,
} from "components/containers/Containers";
import CartTable from "./CartTable";
import { CheckoutContentContainer } from "./checkout.styles";
import { MainTitle } from "components/text/Text";
import { CheckoutTotal } from "./CheckoutTotal";

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

  return (
    <FloatingCentralContainer>
      <OverlayDiv />
      <CheckoutContentContainer>
        <MainTitle $isLight={true}>Checkout</MainTitle>
        <CartTable />
        <CheckoutTotal />
        <form action="/api/checkout_sessions" method="POST">
          <section>
            <button type="submit" role="link">
              Checkout
            </button>
          </section>
        </form>
      </CheckoutContentContainer>
    </FloatingCentralContainer>
  );
}
