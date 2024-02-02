import { useCallback, useMemo } from "react";
import { FloatingCentralContainer } from "components/containers/Containers";
import CartTable from "./cart-table/CartTable";
import {
  CheckoutContentContainer,
  CheckoutTitleContainer,
} from "./checkout.styles";
import { CheckoutTotal } from "./checkout-total/CheckoutTotal";
import { ShippingOptions } from "./shipping-options/ShippingOptions";
import { ActionButton } from "components/buttons/action-button/ActionButton";
import { checkInventory } from "services/shop/checkInventory";
import { Product } from "models/shop/types";
import { useCalculateTotal } from "views/shop/hooks/useCalculateTotal";
import { useShopContext } from "views/shop/shop-context/shop.context";
import { TextScroller } from "components/text-scroller/TextScroller";
import { getStripe } from "services/shop/getStripe";

export default function CheckoutPreview() {
  const {
    state: { cart, shippingTotal },
  } = useShopContext();
  const isCheckoutDisabled = useMemo(
    () =>
      shippingTotal === null ||
      (shippingTotal !== null && cart.some((item) => item.errorMessage)),
    [shippingTotal, cart]
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
        const formData = new FormData();
        formData.append("cart", JSON.stringify(cart));
        formData.append("shippingTotal", JSON.stringify(shippingTotal));

        await fetch("/api/checkout_sessions", {
          method: "POST",
          body: formData,
        });
      } else {
        setInventoryErrors(products);
      }
    }
  };

  return (
    <FloatingCentralContainer>
      <CheckoutContentContainer>
        <CheckoutTitleContainer>
          <TextScroller text=" Checkout " isLight={false} />
        </CheckoutTitleContainer>
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
            type={isCheckoutDisabled ? "button" : "submit"}
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
