import { ShippingOption, ShippingZone } from "models/shop/types";
import { test, describe, vi } from "vitest";
import { useCalculateShipping } from "../useCalculateShipping";
import { render } from "@testing-library/react";

const MOCK_CART = [
  {
    product: {
      id: 174,
      title:
        "RGB Lithograph                                                                                                                                                                                                                                                 ",
      description:
        "blah                                                                                                                                                                                                                                                           ",
      price: 250,
      imageUrl:
        "oh-honey-lith.webp                                                                                                                                                                                                                                             ",
      stock: 10,
      hasVariations: 0,
      percentageDonated: 5,
      shippingOptionId: null,
    },
    quantity: 1,
  },
];
const MOCK_SHIPPING_ZONES = [
  {
    id: 1,
    country: "Afghanistan",
    ausPostZone: -1,
    estimatedDeliverTime: null,
  },
  {
    id: 2,
    country: "Aland Islands",
    ausPostZone: 5,
    estimatedDeliverTime: "9-25 business days",
  },
];
const MOCK_SHIPPING_OPTIONS = [
  {
    id: 63,
    apZone0: 0,
    apZone1: 20,
    apZone2: 30,
    apZone3: 40,
    apZone4: 45,
    apZone5: 23,
    apZone6: 342,
  },
];

const MOCK_SHOP_CONTEXT = {};
vi.mock("views/shop/shop-context/shop.context", () => ({
  useShopContext: MOCK_SHOP_CONTEXT,
}));
const mockFunction = vi.fn();
describe("useCalculateShipping", () => {
  test("returns the no shipping cost for a cart with no charged shipping", () => {
    render(
      <MockComponent
        selectedShippingZone={1}
        shippingZones={MOCK_SHIPPING_ZONES}
        shippingOptions={MOCK_SHIPPING_OPTIONS}
      />
    );
    expect(mockFunction).toHaveBeenCalledWith(0);
  });

  test("returns the calculated shipping cost for a cart with items that charge for shipping", () => {
    render(
      <MockComponent
        selectedShippingZone={1}
        shippingZones={MOCK_SHIPPING_ZONES}
        shippingOptions={MOCK_SHIPPING_OPTIONS}
      />
    );
    expect(mockFunction).toHaveBeenCalledWith(20);
  });
});

interface Props {
  selectedShippingZone: number | null;
  shippingZones: ShippingZone[];
  shippingOptions: ShippingOption[];
}
const MockComponent = ({
  selectedShippingZone,
  shippingZones,
  shippingOptions,
}: Props) => {
  const calculatedShipping = useCalculateShipping(
    selectedShippingZone,
    shippingZones,
    shippingOptions
  );
  mockFunction(calculatedShipping);
  return <div />;
};
