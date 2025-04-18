import { useShopData } from "views/shop/hooks/useShopData";
import { CheckoutSection } from "../checkout.styles";
import { useEffect, useMemo, useState } from "react";
import { ShippingZone } from "models/shop/types";
import {
  DropdownOption,
  SearchableDropdown,
} from "components/inputs/dropdown/searchable-dropdown/SearchableDropdown";
import { useCalculateShipping } from "./useCalculateShipping";
import { ContentSubText, ContentText } from "components/text/Text";
import { useShopContext } from "views/shop/shop-context/shop.context";

export const ShippingOptions = () => {
  const { shippingOptions, shippingZones } = useShopData();
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
    if (selectedShippingZoneId !== null) {
      dispatch({
        type: "UPDATE_SHIPPING",
        payload: {
          shippingTotal,
          selectedShippingZoneId,
        },
      });
    }
  }, [shippingTotal, selectedShippingZoneId, dispatch]);

  return (
    <CheckoutSection>
      <SearchableDropdown
        options={options}
        onSelect={onOptionSelect}
        placeHolder="Select your country"
      />
      {selectedShippingZoneId !== null ? (
        <>
          <ContentText>
            {shippingTotal === 0
              ? "Free Shipping"
              : `Shipping:$${shippingTotal} AUD`}
          </ContentText>
          <ContentSubText>Estimated {shippingTime}</ContentSubText>
        </>
      ) : null}
    </CheckoutSection>
  );
};

const useDropdownOptions = (shippingOptions: ShippingZone[]) =>
  useMemo(
    () =>
      shippingOptions.flatMap(({ country, id, countryCode }) => {
        if (countryCode) {
          return {
            value: String(id),
            label: country,
          };
        }
        return [];
      }),
    [shippingOptions]
  );
