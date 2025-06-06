import { useCallback, useMemo } from "react";
import {
  FloatingCentralContainer,
  FloatingContentContainer,
} from "components/containers/Containers";
import CartTable from "./cart-table/CartTable";
import { CheckoutSection, CheckoutTitleContainer } from "./checkout.styles";
import { CheckoutTotal } from "./checkout-total/CheckoutTotal";
import { ShippingOptions } from "./shipping-options/ShippingOptions";
import { checkInventory } from "services/shop/checkInventory";
import { Product } from "models/shop/types";
import { useCalculateTotal } from "views/shop/hooks/useCalculateTotal";
import { useShopContext } from "views/shop/shop-context/shop.context";
import { TextScroller } from "components/text-scroller/TextScroller";
import { getStripe } from "services/shop/getStripe";
import { useCartItemCount } from "views/shop/hooks/useCartItemCount";
import { useShopData } from "views/shop/hooks/useShopData";
import { FloatingContentNavigation } from "components/navigation/floating-content-navigation/FloatingContentNavigation";
import { ContentSubText } from "components/text/Text";
import { ThirdPartyLogo } from "components/icons/ThirdPartyLogo";
import { CallToAction } from "components/buttons/call-to-action/CallToAction";

const STRIPE_LOGO_PROPS = {
  link: "https://stripe.com",
  alt: "stripe",
  imgUrl: "/assets/icons/stripe-logo.png",
};

export default function CheckoutPreview() {
  const {
    state: { cart, shippingTotal, shippingZoneId },
  } = useShopContext();
  const cartItemCount = useCartItemCount();
  const shippingZoneCode = useSelectedShippingZoneCode(shippingZoneId);
  const isCheckoutDisabled = useMemo(
    () =>
      shippingTotal === null ||
      cartItemCount === 0 ||
      shippingZoneCode === undefined,
    [shippingTotal, cartItemCount, shippingZoneCode]
  );
  getStripe();

  const checkoutTotal = useCalculateTotal(cart, shippingTotal);
  const setInventoryErrors = useDisplayErrors();
  const handleSubmit = async () => {
    if (!isCheckoutDisabled) {
      sessionStorage.setItem("inventoryReset", JSON.stringify(false));
      const checkInventoryResult = await checkInventory(cart);
      const { hasInventory, products } = checkInventoryResult.inventoryData;
      if (hasInventory) {
        await fetch("/api/checkout_sessions", {
          method: "POST",
        });
      } else {
        setInventoryErrors(products);
      }
    }
  };

  return (
    <FloatingCentralContainer>
      <FloatingContentContainer>
        <FloatingContentNavigation navigationRoutes={["back"]} />
        <CheckoutTitleContainer>
          <TextScroller text=" Checkout " isLight={false} />
        </CheckoutTitleContainer>
        <CartTable />
        <ShippingOptions />
        <CheckoutTotal total={checkoutTotal} />
        <CheckoutSection>
          <form
            onSubmit={handleSubmit}
            method="POST"
            action="/api/checkout_sessions"
          >
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <input
              type="hidden"
              name="shippingTotal"
              value={JSON.stringify(shippingTotal)}
            />
            <input
              type="hidden"
              name="shippingZoneCode"
              value={JSON.stringify(shippingZoneCode?.countryCode)}
            />

            <CallToAction
              disabled={isCheckoutDisabled}
              text="Checkout"
              onClick={() => {
                console.warn("Checkout button clicked");
              }}
            />
          </form>
        </CheckoutSection>
        <CheckoutSection>
          <ContentSubText>Secure checkout with</ContentSubText>
          <ThirdPartyLogo {...STRIPE_LOGO_PROPS} />
          <ContentSubText>We never store your card details</ContentSubText>
        </CheckoutSection>
      </FloatingContentContainer>
    </FloatingCentralContainer>
  );
}

const useDisplayErrors = () => {
  const {
    dispatch,
    state: { cart },
  } = useShopContext();
  return useCallback(
    (updatedProductsInventory: Product[]) => {
      const updatedCart = cart.map((cartItem) => {
        const selectedProduct = updatedProductsInventory.find(
          (product) => product.id === cartItem.productId
        );
        if (selectedProduct) {
          if (selectedProduct.stock < cartItem.quantity) {
            return {
              ...cartItem,
              quantity: Math.max(0, selectedProduct.stock),
              errorMessage:
                selectedProduct.stock > 0
                  ? "You ordered more than was in stock your cart has been updated"
                  : "Sorry this item is out of stock",
            };
          }
        }
        return cartItem;
      });
      dispatch({
        type: "UPDATE_CART",
        payload: updatedCart,
      });
    },
    [cart, dispatch]
  );
};

const useSelectedShippingZoneCode = (selectedZoneId: null | number) => {
  const { shippingZones } = useShopData();
  return useMemo(
    () => shippingZones.find(({ id }) => id === selectedZoneId),
    [shippingZones, selectedZoneId]
  );
};
