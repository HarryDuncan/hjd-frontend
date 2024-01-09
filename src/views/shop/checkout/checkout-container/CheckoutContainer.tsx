import { useCallback, useMemo } from "react";
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
import { ActionButton } from "components/buttons/action-button/ActionButton";
import { checkInventory } from "services/shop/checkInventory";
import { Product } from "models/shop/types";
import { useCalculateTotal } from "views/shop/hooks/useCalculateTotal";
import { useShopContext } from "views/shop/shop-context/shop.context";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

export default function CheckoutPreview() {
  const {
    state: { cart, shippingTotal },
  } = useShopContext();
  const isCheckoutDisabled = useMemo(
    () => shippingTotal === null || cart.some((item) => item.errorMessage),
    [shippingTotal, cart]
  );
  const checkoutTotal = useCalculateTotal(cart, shippingTotal);
  const setInventoryErrors = useDisplayErrors();
  const handleSubmit = async () => {
    sessionStorage.setItem("inventoryReset", JSON.stringify(false));
    const checkInventoryResult = await checkInventory(cart);
    const { hasInventory, products } = checkInventoryResult.inventoryData;
    if (hasInventory) {
      const formData = {
        cart,
        shippingTotal,
      };
      await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } else {
      setInventoryErrors(products);
    }
  };

  return (
    <FloatingCentralContainer>
      <OverlayDiv />
      <CheckoutContentContainer>
        <MainTitle $isLight={false}>Checkout</MainTitle>
        <CartTable />
        <ShippingOptions />
        <CheckoutTotal total={checkoutTotal} />
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
          <ActionButton
            isDisabled={isCheckoutDisabled}
            type="submit"
            title="Checkout"
          />
        </form>
      </CheckoutContentContainer>
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
          (product) => product.id === cartItem.product.id
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
