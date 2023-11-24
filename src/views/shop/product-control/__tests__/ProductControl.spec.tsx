import React from "react";
import { expect, test, describe, vi, assert } from "vitest";
import { render } from "@testing-library/react";
import { ProductControl } from "../ProductControl";
import { Button } from "@chakra-ui/react";
import { ContentSubText } from "components/text/Text";
const mockFunction = vi.fn();

describe("ProductControl", () => {
  test("if there is no stock or price - display sold out", () => {
    render(<ProductControl mockConfig={mockConfig} />);
    assert.equal(textCo.textContent, "Hello, World!");
  });

  test("if there is a price and in stock - allow to add to cart", () => {
    render(<ProductControl mockConfig={mockConfig} />);
  });
  test("clicking on add to cart adds the item in the cart", () => {
    render(<ProductControl mockConfig={mockConfig} />);
  });
});
