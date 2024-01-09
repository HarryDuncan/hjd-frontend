import { useCallback, useEffect } from "react";
import { resetInventory } from "services/shop/resetInventory";
import { useShopDataFromStorage } from "views/shop/hooks/useShopDataFromStorage";
import { useShopContext } from "views/shop/shop-context/shop.context";

interface CartStorageHandlerProps {
  resetInventoryEnabled: boolean;
}
const CartStorageHandler = ({
  resetInventoryEnabled,
}: CartStorageHandlerProps) => {
  const {
    dispatch,
    state: { cart: contextCart, shippingTotal },
  } = useShopContext();
  const { cart, shipping } = useShopDataFromStorage();

  const setData = useCallback(() => {
    const hasBeenReset = sessionStorage.getItem("inventoryReset");
    if ((!hasBeenReset || !JSON.parse(hasBeenReset)) && resetInventoryEnabled) {
      resetInventory(cart);
      sessionStorage.setItem("inventoryReset", JSON.stringify(true));
    }
    if (contextCart.length === 0 && cart.length !== 0) {
      dispatch({
        type: "UPDATE_CART",
        payload: cart,
      });
    }
    if (shippingTotal === null) {
      dispatch({
        type: "UPDATE_SHIPPING",
        payload: shipping,
      });
    }
  }, [dispatch, cart, shipping]);
  useEffect(() => {
    setData();
  }, [setData]);
  return null;
};

export default CartStorageHandler;
