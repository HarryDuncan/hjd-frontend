import { ShippingOption, ShippingZone } from "models/shop/types";
import { useMemo } from "react";
import { useShopContext } from "views/shop/shop-context/shop.context";

export const useCalculateShipping = (
  selectedShippingZone: number | null,
  shippingZones: ShippingZone[],
  shippingOptions: ShippingOption[]
) => {
  const {
    state: { cart },
  } = useShopContext();
  return useMemo(() => {
    const selectedZone = shippingZones.find(
      ({ id }) => id === selectedShippingZone
    );
    if (selectedZone) {
      return cart.reduce((prev, curr) => {
        const { shippingOptionId } = curr.product;
        if (!shippingOptionId) {
          return prev;
        }
        const selectedShippingOption = shippingOptions.find(
          ({ id }) => shippingOptionId === id
        );
        if (!selectedShippingOption) {
          return prev;
        }
        const { ausPostZone } = selectedZone;
        return (
          prev +
          selectedShippingOption[`apZone${ausPostZone}` as keyof ShippingOption]
        );
      }, 0);
    }
    return 0;
  }, [cart, selectedShippingZone, shippingZones, shippingOptions]);
};
