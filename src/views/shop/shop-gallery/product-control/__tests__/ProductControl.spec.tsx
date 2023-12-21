import React from "react";
import { test, describe, vi, assert } from "vitest";
import { render } from "@testing-library/react";
import { ProductControl } from "../ProductControl";
import { ActionButton } from "components/buttons/action-button/ActionButton.styled";
import { ContentSubText } from "components/text/Text";
import { Product } from "models/shop/types";
import { WithApp } from "test-utils/WithApp";

vi.mock("components/buttons/action-button/ActionButton.styled", () => ({
  ActionButton: vi.fn(),
}));
vi.mock("components/text/Text", () => ({
  ContentSubText: vi.fn(),
}));

const mockSoldOut = {
  id: 172,
  title:
    "Oaxaquena Archival Print                                                                                                                                                                                                                                       ",
  description:
    "High quality, signed limited edition archival prints. Printed on platinum etching 280gsm paper. Coming in a range of sizes with a 10mm border,\n\nA4 - Edition of 25\nA3 - Edition of 25\nA2 - Edition of 15\nA1 - Edition of 10\n\n                                  ",
  price: 200,
  imageUrl:
    "oaxaquena-print.webp                                                                                                                                                                                                                                           ",
  stock: 0,
  hasVariations: false,
  percentageDonated: 10,
  shippingOptionId: 63,
};

describe("ProductControl", () => {
  test("if there is no stock or price - display sold out", () => {
    render(<MockProductControl productData={mockSoldOut} />);
    expect(ContentSubText).toHaveBeenCalled();
  });
  test("if there is a price and in stock - allow to add to cart", () => {
    const mockProduct = { ...mockSoldOut, stock: 100 };
    render(<MockProductControl productData={mockProduct} />);
    expect(ActionButton).toHaveBeenCalled();
  });
  test("clicking on add to cart adds the item in the cart", () => {
    const mockProduct = { ...mockSoldOut, stock: 100 };
    render(<MockProductControl productData={mockProduct} />);
  });
});

const MockProductControl = ({ productData }: { productData: Product }) => {
  return (
    <WithApp>
      <ProductControl productData={productData} />
    </WithApp>
  );
};
