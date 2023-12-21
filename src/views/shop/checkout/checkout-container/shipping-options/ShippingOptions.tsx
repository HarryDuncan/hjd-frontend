import { useShopData } from "hooks/shop/useShopData";
import { CheckoutSection } from "../checkout.styles";
import { useEffect, useMemo, useState } from "react";
import { ShippingZone } from "models/shop/types";
import {
  DropdownOption,
  SearchableDropdown,
} from "components/dropdowns/SearchableDropdown";
import { useCalculateShipping } from "./useCalculateShipping";
import { ContentSubText, ContentText } from "components/text/Text";
import { useShopContext } from "views/shop/shop-context/shop.context";

export const ShippingOptions = () => {
  const {
    shopData: { shippingOptions, shippingZones },
  } = useShopData();
  const { dispatch } = useShopContext();
  const options = useDropdownOptions(shippingZones);
  const [selectedShippingZoneId, setSelectedShippingZoneId] = useState<
    number | null
  >(null);
  const onOptionSelect = (option: DropdownOption | null) => {
    if (option) {
      setSelectedShippingZoneId(Number(option.value));
    }
  };
  const shippingTime = useMemo(() => {
    const selectedZone = shippingZones.find(
      ({ id }) => id === selectedShippingZoneId
    );
    return selectedZone?.estimatedDeliveryTime;
  }, [selectedShippingZoneId, shippingZones]);
  const shippingTotal = useCalculateShipping(
    selectedShippingZoneId,
    shippingZones,
    shippingOptions
  );

  useEffect(() => {
    dispatch({
      type: "UPDATE_SHIPPING",
      payload: {
        shippingTotal,
      },
    });
  }, [shippingTotal]);

  return (
    <CheckoutSection>
      <SearchableDropdown options={options} onSelect={onOptionSelect} />
      {setSelectedShippingZoneId !== null ? (
        <>
          <ContentText>Shipping:${shippingTotal} AUD</ContentText>
          <ContentSubText>Estimated {shippingTime}</ContentSubText>
        </>
      ) : null}
    </CheckoutSection>
  );
};

const useDropdownOptions = (shippingOptions: ShippingZone[]) =>
  useMemo(
    () =>
      shippingOptions.map(({ country, id }) => ({
        value: String(id),
        label: country,
      })),
    [shippingOptions]
  );
